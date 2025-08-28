type User = {
  name: string;
  age: number;
};

const justine: User = {
  name: 'Justine',
  age: 23,
};

// Assume we have a user which has an age property
function isAdult(user: User) {
  return user.age >= 18;
}

const isJustineAnAdult = isAdult(justine);

console.log(isJustineAnAdult);
