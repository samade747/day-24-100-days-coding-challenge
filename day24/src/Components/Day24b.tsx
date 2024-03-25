let age: number = 25;
age = 26; 
console.log(age); 


const name: string = "Alice";
try {
    name = "Bob"; 
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); 
}
