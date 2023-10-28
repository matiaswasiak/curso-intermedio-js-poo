function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

// const matias = deepCopy(studentBase);
// Object.seal(matias);

// Object.defineProperties(matias, "name", {
//   value: "Matias",
//   configurable: false,
// });
// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     instagram: undefined,
//     facebook: undefined,
//   },
// };

// Object.seal() -> No se pueden agregar ni eliminar propiedades, pero si se pueden modificar las existentes
// Object.isSealed() -> Devuelve true si el objeto está sellado
// Object.freeze() -> No se pueden agregar, eliminar ni modificar propiedades
// Object.isFrozen() -> Devuelve true si el objeto está congelado

// const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const emojis = [
//   "✌",
//   "😂",
//   "😝",
//   "😁",
//   "😱",
//   "👉",
//   "🙌",
//   "🍻",
//   "🔥",
//   "🌈",
//   "☀",
//   "🎈",
//   "🌹",
//   "💄",
//   "🎀",
//   "⚽",
//   "🎾",
//   "🏁",
//   "😡",
//   "👿",
//   "🐻",
//   "🐶",
//   "🐬",
//   "🐟",
//   "🍀",
//   "👀",
//   "🚗",
//   "🍎",
//   "💝",
//   "💙",
//   "👌",
//   "❤",
//   "😍",
//   "😉",
//   "😓",
//   "😳",
//   "💪",
//   "💩",
//   "🍸",
//   "🔑",
//   "💖",
//   "🌟",
//   "🎉",
//   "🌺",
//   "🎶",
//   "👠",
//   "🏈",
//   "⚾",
//   "🏆",
//   "👽",
//   "💀",
//   "🐵",
//   "🐮",
//   "🐩",
//   "🐎",
//   "💣",
//   "👃",
//   "👂",
//   "🍓",
//   "💘",
//   "💜",
//   "👊",
//   "💋",
//   "😘",
//   "😜",
//   "😵",
//   "🙏",
//   "👋",
//   "🚽",
//   "💃",
//   "💎",
//   "🚀",
//   "🌙",
//   "🎁",
//   "⛄",
//   "🌊",
//   "⛵",
//   "🏀",
//   "🎱",
//   "💰",
//   "👶",
//   "👸",
//   "🐰",
//   "🐷",
//   "🐍",
//   "🐫",
//   "🔫",
//   "👄",
//   "🚲",
//   "🍉",
//   "💛",
//   "💚",
// ];
// // let numerito = 0;

// // for (let i = 0; i < numeritos.length; i++) {
// //   numerito = numeritos[i];
// //   console.log({ i, numerito });
// // }

// function recursiva(numbersArray) {
//   if (numbersArray.length !== 0) {
//     const firstNumber = numbersArray[0];
//     console.log(firstNumber);

//     numbersArray.shift();
//     recursiva(numbersArray);
//   }
// }

function createStudent({ name, email, age }) {
  return { name, age, email };
}

const matias = createStudent({
  name: "Matias",
  age: 22,
  email: "matiaswasiak@gmail.com",
});
