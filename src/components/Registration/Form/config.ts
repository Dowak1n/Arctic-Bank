// libraries
import * as Yup from 'yup';
import {
  differenceInYears,
} from 'date-fns';
// constants
import { ERRORS } from 'constants/errors';
import { VALIDATION } from 'constants/validation';
import { MONTH_LIST } from 'constants/dates';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDay();
const minNameLength = 2;
const maxNameLength = 30;
const minAgeValue = 18;
const currentDateNow = new Date(Number(currentYear), Number(currentMonth), Number(currentDay));

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.name, ERRORS.testNameLength)
    .min(minNameLength, ERRORS.minNameLength)
    .max(maxNameLength, ERRORS.maxNameLength),
  lastName: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.name, ERRORS.testNameLength)
    .min(minNameLength, ERRORS.minNameLength)
    .max(maxNameLength, ERRORS.maxNameLength),
  password: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.password, ERRORS.passwordMatches),
  repeatPassword: Yup.string()
    .required(ERRORS.required)
    .test('max', ERRORS.repeatPassword, (value, context) => value === context.parent.password),
  email: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.email, ERRORS.emailMatches),
  age: Yup.date()
    .required(ERRORS.required)
    .test('min', ERRORS.minBirthdayValue, (value, context) => {
      const enteredDate = new Date(
        Number(context.parent.year),
        Number(MONTH_LIST.indexOf(context.parent.month)),
        Number(context.parent.day),
      );

      return differenceInYears(currentDateNow, enteredDate) >= minAgeValue;
    }),
  passportNumber: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.passport, ERRORS.passportNumberMatches),
  phoneNumber: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.phone, ERRORS.phoneNumberMatches),
  conditionRules: Yup.boolean()
    .required(ERRORS.required)
    .oneOf([true], ERRORS.conditionRules),
});

export default SignupSchema;
