import regex from './regex';

const isEmpty = (val) => (val === null || val === '');

export const validateRequired = (val) => (
  !isEmpty(val)
  || 'This field is required'
);

export const validateEmail = (val) => (
  isEmpty(val)
  || regex.email.test(val)
  || 'Invalid email'
);

export const validatePhone = (val) => (
  isEmpty(val)
  || (regex.phone.test(val) && String(val).length > 3 && String(val).length < 20)
  || 'Invalid phone number'
);

export const validateNumber = (val, { min, max, isInteger } = {}) => {
  if (isEmpty(val)) return true;
  const validNumber = (isInteger ? /^-?\d+$/ : /^-?(\d*\.)?\d+$/).test(val);
  if (validNumber) {
    if (typeof min === 'number' && Number(val) < min) return `Minimum value is ${min}`;
    if (typeof max === 'number' && Number(val) > max) return `Maximum value is ${max}`;
    return true;
  }
  if (isInteger && /^-?(\d*\.)?\d+$/.test(val)) return 'Only accept integer';
  return 'Invalid number';
};

export const validateInteger = (val, options) => (
  validateNumber(val, { ...options, isInteger: true })
);
