function powRecursive(base, exponent) {
    if (exponent === 0) {
        // Any number raised to the power of 0 is 1
        return 1;

    } else if (exponent < 0) {
        // Handle negative exponents
        return 1 / powRecursive(base, -exponent);

    } else {
        // Recursive case: multiply base by itself (exponent - 1) times
        return base * powRecursive(base, exponent - 1);
    }
}


console.log(powRecursive(5, 5)); 
console.log(powRecursive(5, 0)); 
console.log(powRecursive(3, -2));
