export interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  feedback: string;
  governmentID: File | null;
  residentialAddress: string;
  proofOfIncome: File | null;
  familySize: string;
  serviceType: string;
  reason: string;
}
