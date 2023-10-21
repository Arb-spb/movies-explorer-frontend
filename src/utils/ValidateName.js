import { NAME_REGEXP } from '../constants';

export function validateName(value) {
  return NAME_REGEXP.test(value);
}
