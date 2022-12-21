// libraries
import { getDaysInMonth } from 'date-fns';
// constants
import { MONTH_LIST } from 'constants/dates';

const shiftYear = 1;
const currentDate = new Date();
const currentYearValue = currentDate.getFullYear() + shiftYear;

export const getDayInMonth = (year: string, month: string) => {
  const shiftIndex = 1;
  const result = getDaysInMonth(new Date(Number(year), Number(MONTH_LIST.indexOf(month))));

  return Array.from({ length: result }, (element, index) => index + shiftIndex);
};

export const getYearOption = (minAgeValue:number, maxAgeValue:number) => Array.from({
  length: (currentYearValue - minAgeValue)
      - (currentYearValue - maxAgeValue),
}, (element, index) => index + (currentYearValue - maxAgeValue));
