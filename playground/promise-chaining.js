require("../src/db/mongoose");
const User = require("../src/models/user");

const _id = "5ecf4b4495307f356dc74066";
const age = 2;

// User.findByIdAndUpdate(_id, {
//   age: 1,
// })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (_id, age) => {
  const user = await User.findByIdAndUpdate(_id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount(_id, age)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
