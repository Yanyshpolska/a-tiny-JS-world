/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const dog = {
  species: "dog",
  name: "Bobik",
  gender: "male",
  legs: 4,
  hands: 0,
  saying: "woof-woof!",
};
const cat = {
  species: "cat",
  name: "Flow",
  gender: "female",
  legs: 4,
  hands: 0,
  saying: "meow!",
};
const woman = {
  species: "woman",
  name: "Ann",
  gender: "female",
  legs: 2,
  hands: 2,
  saying: "Hello, my darling!",
};
const womanCat = {
  species: "woman",
  name: "Jess",
  gender: "female",
  legs: 2,
  hands: 2,
  saying: woman.saying,
};
const man = {
  species: "man",
  name: "Tom",
  gender: "male",
  legs: 2,
  hands: 2,
  saying: "Hi there!",
};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

// =============================================
// List inhabitants using project built-in print(message) function. Each list entry should look like human; John; male; 2; 2; Hello world!

// Optional: each inhabitant can be friendly to 1 or more other inhabitants (or to none). If you implement this then the output should also list friends, i.e. human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny

// If you know how to improve the code sample above e.g. employing #Array.join or a function that takes an object as an argument and returns a string to feed to print() then go ahead.

const inhabitants = [dog, cat, woman, womanCat, man];
const keys = ["species", "name", "gender", "legs", "hands", "saying"];
let arr = [];
for (let i = 0; i < inhabitants.length; i += 1) {
  for (let j = 0; j < keys.length; j += 1) {
    //  console.log(inhabitants[i][keys[j]]);

    arr.push(inhabitants[i][keys[j]]);
  }
  print(arr.join("; "));
  arr = [];
}

// print(inhabitants);
const a = print(
  dog.species +
    ";" +
    dog.name +
    ";" +
    dog.gender +
    ";" +
    dog.legs +
    ";" +
    dog.hands +
    ";" +
    dog.saying
);
