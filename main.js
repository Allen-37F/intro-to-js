// The output of the problems is written on a single line for brevity; your solutions will output each value on a new line like in the example above.
// 0 100 200 300 400 500 600 700 800 900 1000
// 1 2 4 8 16 32 64 128
// 0 2 4 6 8 10
// 3 6 9 12 15
// 9 8 7 6 5 4 3 2 1 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// Write a program...
//
// that prints the numbers 1-25 and tells you whether that number is odd or even?
function first() {
  for (var i = 1; i < 26; i++) {
    if (i%2===0) {
      console.log(i + " is even")
    }
    else {
      console.log(i + " is odd")
    }
  }
}
first()

// that prints the numbers from 1 to 50, however, for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
function second() {
  for (var i = 1; i < 51; i++) {
    if (i%3===0 && i%5 ===0) {
      console.log("FizzBuzz")
    }
      else if (i%5 === 0) {
        console.log("Buzz")
      }
          else if (i%3===0) {
            console.log("Fizz")
          }

    else {console.log(i)
    }
  }
  }
second()

// to sum the multiples of 3 and 5 under 1000.
function third() {
  var result = 0;
    for (var i = 1; i < 1001; i++) {
      if (i%3===0 && i%5===0) {
        result += i
      }
    }console.log(result)
}
third()
//
// that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

function fourth() {
  console.log("#")
  console.log("##");
  console.log("###");
  console.log("####");
  console.log("#####");
  console.log("######");
  console.log("#######");
}
fourth()
