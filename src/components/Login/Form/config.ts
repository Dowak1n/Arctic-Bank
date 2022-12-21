// libraries
import * as Yup from 'yup';
// constants
import { ERRORS } from 'constants/errors';
import { VALIDATION } from 'constants/validation';

const LogInSchema = Yup.object().shape({
  password: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.password, ERRORS.passwordMatches),
  email: Yup.string()
    .required(ERRORS.required)
    .matches(VALIDATION.email, ERRORS.emailMatches),
});

export default LogInSchema;
