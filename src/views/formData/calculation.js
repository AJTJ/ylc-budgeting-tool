export const income = values =>
  Number(values.wage_income) +
  Number(values.self_employment_income) +
  Number(values.government_benefits) +
  Number(values.other_income) +
  Number(values.other_income_2);

export const housing = values =>
  Number(values.rent_mortgage) +
  Number(values.heat) +
  Number(values.hydro) +
  Number(values.cable_internet) +
  Number(values.phone) +
  Number(values.other_housing) +
  Number(values.other_housing_name);

export const transportation = values =>
  Number(values.car) +
  Number(values.gas) +
  Number(values.parking) +
  Number(values.public_transport) +
  Number(values.taxi) +
  Number(values.other_transport) +
  Number(values.other_transport_name);

export const living = values =>
  Number(values.food) +
  Number(values.clothing_laundry) +
  Number(values.childcare) +
  Number(values.loan_payment) +
  Number(values.credit_card) +
  Number(values.prescription_drugs) +
  Number(values.pets) +
  Number(values.other_living_expenses) +
  Number(values.other_living_expenses_name);

export const personal = values =>
  Number(values.recreation_entertainment) +
  Number(values.eating_out) +
  Number(values.cigarettes_alcohol) +
  Number(values.personal_grooming) +
  Number(values.magazines_newspapers) +
  Number(values.gifts_donations) +
  Number(values.vacation_travel) +
  Number(values.saving_goals);

export const totalExpenses = values =>
  housing(values) + transportation(values) + living(values) + personal(values);