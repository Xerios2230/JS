let rectangle = {
  x: 0,
  y: 0,
  width: 10,
  height: 5
};

function showRectangleInfo(rect) {
  return `Ліва верхня точка: (${rect.x}, ${rect.y}), права нижня: (${rect.x + rect.width}, ${rect.y + rect.height})`;
}

function getWidth(rect) {
  return rect.width;
}

function getHeight(rect) {
  return rect.height;
}

function getArea(rect) {
  return rect.width * rect.height;
}

function getPerimeter(rect) {
  return 2 * (rect.width + rect.height);
}

function changeWidth(rect, value) {
  rect.width += value;
}

function changeHeight(rect, value) {
  rect.height += value;
}

function changeSize(rect, dw, dh) {
  rect.width += dw;
  rect.height += dh;
}

function moveX(rect, value) {
  rect.x += value;
}

function moveY(rect, value) {
  rect.y += value;
}

//1
console.log(showRectangleInfo(rectangle));
//2
console.log(getWidth(rectangle));
//3
console.log(getHeight(rectangle));
//4
console.log(getArea(rectangle));
//5
console.log(getPerimeter(rectangle));
//6
changeWidth(rectangle, 5);
//7
changeHeight(rectangle, -2);
//8
changeSize(rectangle, 3, 4);
//9
moveX(rectangle, 10);
//10
moveY(rectangle, -5);

console.log(rectangle);
