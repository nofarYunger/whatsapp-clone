import { format, isToday, isYesterday, isThisWeek } from "date-fns";

function UseTimeFormat(date) {
  //if today => show 12:34
  if (isToday(date)) return format(date, "kk:mm");

  //if yesterday => show 'yesterday'
  if (isYesterday(date)) return "Yesterday";

  //if this week => show 'Monday'
  if (isThisWeek(date)) return format(date, "eeee");

  //if later than that => show date 14/2/2022
  return format(date, "dd/MM/yyyy");
}

export default UseTimeFormat;
