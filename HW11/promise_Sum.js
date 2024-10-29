//promise Sum
function sumNumb(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Invalid input');
        } else {
            const sum = a + b;
            resolve(sum);
        }   
    
    });
}
//display sumNumb with 3 and 5
sumNumb(3,5).then((result) => {
    console.log(result);
}    
).catch((error) => {
    console.log(error);
});
