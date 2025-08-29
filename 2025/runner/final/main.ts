type User = {
  name: string;
  age: number;
};

const justine: User = {
  name: 'Justine',
  age: 23,
};

console.log(justine);

enum Gender {
  Male = 'M',
  Female = 'F',
}

console.log(Gender.Male);

// Other part for type check
const idol: {
  name: string;
  age: number;
} = {
  name: 'Siyeon',
  age: '25',
};

console.log(idol);
