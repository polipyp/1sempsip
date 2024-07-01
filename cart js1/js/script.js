function calc() {
    const x = parseFloat(document.getElementById("inputX").value);

    if (isNaN(x)) {
        alert("Пожалуйста, введите числовое значение.");
        return;
    }
    let result;
    if (x < -6) {
       result = 3*Math.pow(x,2)-x;
    } else if (x >= -6 && x <= 5) {
        result = Math.sqrt(7-x);
    } else if (x > 5) {
        result = 7*x-3;
    }
    return result;
}
function displayRez() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Результат: ${calc()}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("output");
    let s1 = "Александр";
    const originalS1 = s1;
    let s2 = "лень писать увлечения";
    const lengthS1 = s1.length;
    const s22 = s2.split(" ").join("&nbsp;&nbsp;&nbsp;");
    s1 = "Павел";
    outputDiv.innerHTML = `
        <p>Исходная строка s1: ${originalS1}</p>
        <p>Длина строки s1: ${lengthS1}</p>
        <p>Измененная строка s1: "${s1}"</p>
        <p>Строка s2: ${s2}</p>
        <p>Строка s2 с дополнительными пробелами: "${s22}"</p>
    `;
});
