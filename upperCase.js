const upperCase = (str) => {

    let string = "";

    for (let i = 0; i < str.length-1; i ++) {
        if (i === 0){
            string = string + str[0].toUpperCase();
        }
        if (i >= 0 && str[i] === " " ) {
            string = string + str[i+1].toUpperCase();
           }
           else {
            string = string + str[i+1];
            }
        }
    return string;
}


console.log(upperCase(' many Different Words Inside Sentence'));