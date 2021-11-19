const checkYearIsValid = enteredYear => {
  if (isFinite(enteredYear) && enteredYear.length === 4) {
    return true;
  } else return false;
};

export default checkYearIsValid;
