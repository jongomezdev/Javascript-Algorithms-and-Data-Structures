const arr1 = [
  ['name', 'id', 'age', 'weight', 'Cool'],
  ['Susan', '3', '20', '120', true],
  ['John', '1', '21', '150', true],
  ['Bob', '2', '23', '90', false],
  ['Ben', '4', '20', '100', true],
];

const arr2 = [
  ['name', 'id', 'height'],
  ['Bob', '2', '50'],
  ['John', '1', '45'],
  ['Ben', '4', '43'],
  ['Susan', '3', '48'],
];

const arr3 = [
  ['name', 'id', 'parent'],
  ['Bob', '2', 'yes'],
  ['John', '1', 'yes'],
];

function parseArray(arr) {
  const [headings, ...data] = arr;
  // console.log({ headings, data });
  return data.reduce((acc, data, i) => {
    // loop over the headings, and assign the props to an object
    const person = {};
    for (const [index, heading] of headings.entries()) {
      person[heading] = data[index];
    }
    // console.log(person);
    return [...acc, person];
  }, []);
}

const allData = [...parseArray(arr1), ...parseArray(arr2), ...parseArray(arr3)];

const merged = allData.reduce((acc, currentPerson) => {
  console.log(`starting ${currentPerson.name}`);
  // if it exists, merge their objects. Otherwise add them.
  const existingPersonIndex = acc.findIndex(
    (person) => person.id === currentPerson.id
  );
  if (existingPersonIndex >= 0) {
    acc[existingPersonIndex] = {
      ...acc[existingPersonIndex],
      ...currentPerson, // These are the new fields we are adding in
    };
    // TODO Return merged
    return acc;
  }
  return [...acc, currentPerson];
}, []);

console.table(merged);
