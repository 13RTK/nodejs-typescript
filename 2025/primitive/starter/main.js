const justine = {
  name: 'Justine',
  age: 23,
};

// Assume we have a user which has an age property
function isAdult(user) {
  return user.age >= 18;
}

const isJustineAnAdult = isAdult(justine);

console.log(isJustineAnAdult);
