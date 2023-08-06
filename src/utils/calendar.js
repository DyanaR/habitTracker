import dayjs from "dayjs";

export const colours = [
  "",
  "#D9454A",
  "#A0C2DD",
  "#CFC1D7",
  "#ECC7A1",
  "#F1E9BB",
  "#EEA3A1",
  "#738A6E",
];

export function getMonth(month = dayjs().month(), year = dayjs().year()) {
  month = Math.floor(month);
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getYear(year = dayjs().year()) {
  const month = dayjs().month();

  const firstMonthOfYear = dayjs().year(year).month(month).startOf("year");
  const lastMonthOfYear = dayjs().year(year).month(month).endOf("year");

  const arrayOfMonth = [];

  for (let i = firstMonthOfYear.month(); i <= lastMonthOfYear.month(); i++) {
    arrayOfMonth.push({
      monthNames: firstMonthOfYear.month(i),
      month: getMonth(firstMonthOfYear.month(i).month(), year),
    });
  }

  return arrayOfMonth;
}

//   export function getYear(year = dayjs().year()){
// 	const month = dayjs().month();
// 	const firstMonthOfYear = dayjs().year(year).month(month).startOf("year").month();
// 	let currentCount = firstMonthOfYear - 1;
// 	const monthsMatrix = new Array(4).fill([]).map(() => {
// 		return new Array(3).fill([]).map(() => {
// 			currentCount++;
// 			return dayjs(new Date(year, currentCount));
// 			//returns 12 months, the first of each month details
// 		});
// 	});
// 	return monthsMatrix;
//   }
