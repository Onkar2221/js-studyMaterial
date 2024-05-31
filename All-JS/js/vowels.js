// create a function using the "function" keyword that take a string as an argument
// and return the number of vowels in the String.

function vowels(str) {
  let count = 0;
  for (let i of str) {
    console.log(i);

    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }

  console.log(count);
}

vowels("onkar kulkarni");
