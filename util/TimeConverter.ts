export default function timeConverter(
  UNIX_timestamp: number,
  type: "ltr" | "rtl"
) {
  const a = new Date(UNIX_timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthsAr = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "قد",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const year = a.getFullYear();
  const month = type === "ltr" ? months[a.getMonth()] : monthsAr[a.getMonth()];
  const date = a.getDate();
  const time = `${date}/${month}/${year}`;
  return time;
}
