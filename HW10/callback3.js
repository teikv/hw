//calculate area of rectangle and square using callback function
function areaRectangle(l, w, callback) {
    const area = l * w;
    callback(area);
}
function areaSquare(s, callback) {
    const area = s * s;
    callback(area);
}
function printArea(area) {
    console.log('Area is: ' + area);
}
areaRectangle(5, 6, printArea);