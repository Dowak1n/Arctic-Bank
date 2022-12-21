export type Amount = {
  amount: string,
  term: string,
  condition: string
};

export type PersonalData = {
  age: number
  conditionRules: boolean
  conditionSMS: boolean
  day: string
  email: string
  firstName: string
  lastName: string
  month: string
  passportNumber: string
  password: string
  phoneNumber: string
  repeatPassword: string
  sex: string
  year: string
};

export type Email = {
  userEmail: string
};

export type Data = {
  userInfoData: PersonalData
};
