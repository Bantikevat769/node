// const student = {
//   id: 1,
//   name: "Amit Sharma",
//   age: 20,
//   course: "Computer Science",
// };
// // consol run

// console.log(typeof student);
// const jsonString = JSON.stringify(student);
// console.log(jsonString);
const jsonString =
  '{"id":1,"name":"Amit Sharma","age":20,"course":"Computer Science"}';
const student = JSON.parse(jsonString);
console.log(student);
