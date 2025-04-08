export function slugify(title: string): string {
  return (
    title
      .toLowerCase()
      .trim()
      // Remove apostrophes (straight and curly) and colons
      .replace(/[’':]/g, "")
      // Replace spaces and all dash variants with a single hyphen
      .replace(/[\s-–—]+/g, "-")
  );
}
