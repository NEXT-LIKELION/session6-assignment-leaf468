///1

const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

const newUsers = users.map(({ name, age }) => {
    const status = age >= 18 ? "성인" : "미성년자";
    return { name, age, status };
});

console.log(newUsers);

///2

const person = {
    name: "David",
    city: " London",
    age: 30,
};

let allString = true;

for (const key in person) {
    if (typeof person[key] !== "string") {
        allString = false;
        break;
    }
}

if (allString) {
    person["확인됨"] = true;
}

console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", " melon"];
const filteredFruits = [];

for (const fruit of fruits) {
    if (fruit.length >= 5) {
        filteredFruits.push(fruit);
    }
}

console.log(filteredFruits);
///3

const numbers = [1, 2, 5, 6, 7, 9, 2, 6];

const numbers1 = numbers.filter((num) => num % 2 === 0);
console.log(numbers1);

const numbers2 = numbers1.map((num) => num ** 2);
console.log(numbers2);

const total = numbers2.reduce((acc, cur) => acc + cur, 0);
console.log(total);

///4
const jsonString = `
[
  { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com" },
  { "id": 3, "name": "Charlie", "age": 35, "email": "charlie@example.com" }
]
`;

const parsedData = JSON.parse(jsonString);

const newArray = parsedData.map(({ id, name, age }) => {
    return { id, name, age };
});

console.log(newArray);
// [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 }
// ]

///5
const user = {
    id: 101,
    name: "Eve",
    email: "eve@example.com",
    role: "admin",
};

function getUserData(obj, key) {
    return key in obj ? obj[key] : "키 없음";
}

console.log(getUserData(user, "name")); // "Eve"
console.log(getUserData(user, "email")); // "eve@example.com"
console.log(getUserData(user, "age")); // "키 없음"
