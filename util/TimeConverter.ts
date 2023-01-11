export default function timeConverter(
  UNIX_timestamp: number,
  type: "ltr" | "rtl",
  sep: "Space" | "slash"
): string {
  const event = new Date(UNIX_timestamp);
  const date = event
    .toLocaleDateString(type === "ltr" ? "en-GB" : "ar-EG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/،/g, sep === "Space" ? " " : "/");
  console.log(date);
  return date;
}
