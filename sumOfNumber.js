const son = (num) => {
    let sum = 0;
    while (num) {
        let tmp = num % 10;
        num = (num - tmp)/10;
        sum = sum + tmp;
    }
    return sum;
}


console.log(son(576));