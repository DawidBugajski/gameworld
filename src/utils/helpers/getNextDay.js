// On the home page there is a section that shows games that are yet to be released. Therefore, I need to give a dynamic start date in the endpoint in the API so that it is a day later than the day the user checks the page.

export const getNextDay = () => {
  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);
  const year = nextDay.getFullYear();
  const month = nextDay.getMonth() + 1; // The value returned by getMonth() is between 0 and 11, so we add 1 to get the correct month value
  const day = nextDay.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};
