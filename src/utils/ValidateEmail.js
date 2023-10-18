import { EMAIL_REGEXP } from '../constants';

export function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}
