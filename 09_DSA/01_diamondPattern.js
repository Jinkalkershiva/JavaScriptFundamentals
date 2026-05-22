const n = 5;

// Upper Part
for (let i = 0; i < n; i++) {

    // Spaces
    for (let j = i; j < n - 1; j++) {
        process.stdout.write(" ");
    }
    // Stars
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    // Stars
    for (let j = 0; j < i; j++) {
        process.stdout.write("*");
    }

    console.log("");
}

// Lower Part
for (let i = 1; i < n; i++) {

    // Spaces
    for (let j = 0; j < i; j++) {
        process.stdout.write(" ");
    }
    // Stars
    for (let j = i; j < n; j++) {
        process.stdout.write("*");
    }
    // Stars
    for (let j = i; j < n - 1; j++) {
        process.stdout.write("*");
    }

    console.log("");
}