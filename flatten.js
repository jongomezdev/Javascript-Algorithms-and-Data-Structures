// this function will take a deeply nested object and flatten the entire obj creating a new obj

export const flatten = (obj = {}) =>
  Object.keys(obj || {}).reduce((acc, cur) => {
    if (typeof obj[cur] === "object") {
      acc = { ...acc, ...flatten(obj[cur]) };
    } else {
      acc[cur] = obj[cur];
    }
    return acc;
  }, {});
