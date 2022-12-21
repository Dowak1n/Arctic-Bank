export const VALIDATION = {
  email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{12,}$/gm,
  phone: /^(\+375|80)\(\d{2}\)(\d{3})-(\d{2})-(\d{2})$/gm,
  passport: /^[a-zA-Z]{2}\d{6}$/gm,
  name: /^[a-zA-Z]+$/gm,
};
