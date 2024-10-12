const args = process.argv.slice(2); 

const numbers = args.map(Number);

if (numbers.length === 0 || numbers.some(isNaN)) {
    console.log("Please provide valid numbers as arguments.");
    process.exit(1);
}

const total = numbers.reduce((acc, num) => acc + num, 0);
const average = total / numbers.length;

console.log(`The average is: ${average}`);