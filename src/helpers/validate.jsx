export const validate = (value) => {
  let error;

  if (value.length < 1) {
    error = "Se requiere este campo";
  } else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(value)) {
    error = "Debe ser un numero";
  }

  return error;
};
