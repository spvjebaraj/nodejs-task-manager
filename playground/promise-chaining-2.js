require("../src/db/mongoose");
const Task = require("../src/models/task");

//const _id = "5ed040bb5a4535072f7842ee";

const _id = "5ed040ac5a4535072f7842ed";

// Task.findByIdAndRemove(_id)
//   .then((task) => {
//     console.log(task);
//     return Task.find({
//       completed: false,
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Task.findByIdAndDelete(_id)
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({
//       completed: false,
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (_id) => {
  const task = await Task.findByIdAndDelete(_id);
  const count = await Task.countDocuments({
    completed: false,
  });
  return count;
};

deleteTaskAndCount(_id)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
