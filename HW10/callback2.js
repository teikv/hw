function A (callback) {
    const kq = 5 +6; 
    callback(kq);
}
function B(kq) {
    console.log('Hello' + kq);

}
A(B);