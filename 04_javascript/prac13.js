let result = 0;
for (x = 1; x <= 9; x++) {
    console.log(`***${x}단***`)
    for (y = 1; y <= 9; y++){
        result = x * y;
        console.log(x + "*" + y + "=" + result);
    }
}
