function showMessage() {
  setTimeout(() => {
    console.log("Привіт! Повідомлення через 3 секунди.");
  }, 3000);
}

function greetUser(name) {
  setTimeout(() => {
    console.log(`Привіт, ${name}!`);
  }, 2000);
}

function countUp() {
  let i = 1;
  let interval = setInterval(() => {
    console.log(i);
    if (i === 10) clearInterval(interval);
    i++;
  }, 1000);
}

function countdown() {
  let i = 10;
  let interval = setInterval(() => {
    if (i >= 0) {
      console.log(i);
      i--;
    } else {
      console.log("Старт!");
      clearInterval(interval);
    }
  }, 1000);
}

function showCurrentDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  console.log(`${day}.${month}.${year}`);
}

function calculateAge(birthYear) {
  const now = new Date();
  return now.getFullYear() - birthYear;
}


//1
showMessage();

//2
greetUser("User");

//3
countUp();

//4
countdown();

//5
showCurrentDate();

//6
console.log(calculateAge(2005));
