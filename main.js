const matias = {
  name: "Matias",
  age: 22,
  approvedCourses: ["Curso 1", "Curso 2"],
  addCourse(newCourse) {
    console.log("this", this);
    console.log("this.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// console.log(Object.keys(matias));
// console.log(Object.getOwnPropertyNames(matias));
// console.log(Object.entries(matias));

console.log(Object.getOwnPropertyDescriptors(matias));

Object.defineProperty(matias, "prueba", {
  value: "hola",
  enumerable: true,
  writable: true,
  configurable: true,
});
