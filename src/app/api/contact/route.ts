import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { type, data } = await req.json();

    if (!type || !data) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let recipientEmail = "";
    let subject = "";
    let htmlContent = "";

    if (type === "volunteer") {
      recipientEmail = process.env.VOLUNTEER_RECIPIENT_EMAIL || "";
      subject = `New Volunteer Application: ${data.fullName}`;
      htmlContent = `
        <h2>New Volunteer Application</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Volunteer Role:</strong> ${data.feedbackCategory}</p>
        <p><strong>Reason for Volunteering:</strong></p>
        <p>${data.feedback}</p>
      `;
    } else if (type === "feedback") {
      recipientEmail = process.env.FEEDBACK_RECIPIENT_EMAIL || "";
      subject = `New Feedback Submission: ${data.feedbackCategory}`;
      htmlContent = `
        <h2>New Feedback Submission</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Category:</strong> ${data.feedbackCategory}</p>
        <p><strong>Message:</strong></p>
        <p>${data.feedback}</p>
      `;
    } else {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    if (!recipientEmail) {
      console.error(`Recipient email not configured for type: ${type}`);
      return NextResponse.json({ error: "Recipient email not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: `${process.env.SMTP_FROM_NAME || "Apapa LG Website"} <onboarding@resend.dev>`,
      to: recipientEmail,
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email via Resend" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 });
  }
}
