let numbers = []
const page = document.getElementById("numeri");


for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

console.log("fuori", numbers);
page.innerHTML = numbers




















