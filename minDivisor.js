const divisor = (n) => {
    if (n === 1){
        return n;
    }
    const iter = (x, y) => {
        if (x % y === 0) {
            return y;
        }
        return iter (x, y+1);
    }
     return  iter(n, 2);
}



console.log(divisor(37));