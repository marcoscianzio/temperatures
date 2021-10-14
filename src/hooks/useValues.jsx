export const useValues = (arr) => {
  const handleMaxMin = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return { min, max };
  };

  const handleAverage = (arr) => {
    const result = arr.reduce((a, b) => a + b, 0) / arr.length;

    return result;
  };

  return { handleMaxMin, handleAverage };
};
