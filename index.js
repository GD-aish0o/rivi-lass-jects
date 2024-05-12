// The function is named printingEvens.
// It takes an array of integers as an argument, arr: number[].
// The function doesn’t return any value so; (indicated by void).
function printingEvens(arr) {
    //     The if statement here checks whether num is even.
    // If num can be easily divided by 2 (i.e., num % 2 === 0), it’s considered an even number.
    // If the condition is true, the even number is printed using console.log(num).
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}
// Example usage:
var TheNumberStack = [7, 2, 9, 4, 6, 1, 8, 3, 5, 0, 3, 9, 2, 7, 4]; //random ai generated numbers
printingEvens(TheNumberStack);
// brief summary of the code: This piece of code defines a function with loop that prints all even numbers from an input array.
// note; feel free to modify the array named TheNumberStack with random numbers of your choice.
