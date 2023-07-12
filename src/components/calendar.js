import dayjs from "dayjs";


//month view
export const generateDate = (
	month = dayjs().month(),
	//cuurent month number ex. 6
	year = dayjs().year()
	//current year number ex. 2023
) => {

	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");

	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
	
	const arrayOfDate = [];

	// prefix dates 
	for(let i=0; i < firstDateOfMonth.day(); i++){
		arrayOfDate.push({
			currentMonth: false,
			date: firstDateOfMonth.day(i)
		});
	}


	//month dates
	for(let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today: firstDateOfMonth.date(i).toDate().toDateString() === 
				dayjs().toDate().toDateString()
		});
	}

	const remaining = 42 - arrayOfDate.length;
	//suffix dates
	for(let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++){
		arrayOfDate.push(
			{	currentMonth: false,
				date: lastDateOfMonth.date(i)
			}
			);
	}

	return arrayOfDate;
};

//year view
export const generateMonth = (
	month = dayjs().month(),
	//month number ex. 6
	year = dayjs().year()
	//year number ex. 2023
) => {

	const firstMonthOfYear = dayjs().year(year).month(month).startOf("year");
	const lastMonthOfYear = dayjs().year(year).month(month).endOf("year");

	const arrayOfMonth = [];

	for(let i = firstMonthOfYear.month(); i <= lastMonthOfYear.month(); i++){
		arrayOfMonth.push({month: firstMonthOfYear.month(i)});
	}

	return arrayOfMonth;
};


export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];