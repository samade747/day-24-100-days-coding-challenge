// Example 1: Using `let` allows reassignment
let age: number = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26

// Example 2: Trying to reassign a `const`-declared variable
const name: string = "Alice";
try {
    name = "Bob"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
