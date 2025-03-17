const phoneNumberPattern = /^\+?\d{8}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmpty = (value) => !value?.trim();

export const isValidEmail = (email) => emailPattern.test(email);

export const isValidPhoneNumber = (phoneNumber) => phoneNumberPattern.test(phoneNumber);
