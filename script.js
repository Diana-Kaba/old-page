"use strict";
alert("Вы находитесь на странице!");
let count = 0;
let t;
function second(n) {
  count++;
  document.write(count + " ");
  if (count == n) {
    clearInterval(t);
    alert("Страница устарела!");
  }
}
t = setInterval(second, 1000);

second(10);
