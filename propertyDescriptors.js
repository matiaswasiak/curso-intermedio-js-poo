const matias = {
  name: "Matias",
  age: 22,
  approvedCourses: ["Curso 1", "Curso 2"],
  addCourse(newCourse) {
    if (Object.isFrozen(this)) {
      console.error("Cannot add course, object is frozen.");
      return;
    }
    console.log(`this: ${this}`);
    console.log(`this.approvedCourses: ${this.approvedCourses}`);
    this.approvedCourses.push(newCourse);
  },
};

// Object.keys(matias) returns an array of a given object's own enumerable property names
// console.log(Object.keys(matias));

// Object.getOwnPropertyNames(matias) returns an array of all properties (including non-enumerable properties except for those which use Symbol)
// console.log(Object.getOwnPropertyNames(matias));

// Object.entries(matias) returns an array of a given object's own enumerable string-keyed property [key, value] pairs
// console.log(Object.entries(matias));

// Object.seal(matias) prevents new properties from being added to it and marks all existing properties as non-configurable
Object.seal(matias);

// Object.freeze(matias) makes the object immutable
Object.freeze(matias);

// Object.getOwnPropertyDescriptors(matias) returns all own property descriptors of an object
console.log(Object.getOwnPropertyDescriptors(matias));
