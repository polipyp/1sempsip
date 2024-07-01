// script.js
document.getElementById('externalBtn').addEventListener('click', function() {
    alert('Внешний');
    
    // if statement
    let num = prompt("Введите число:");
    if (num > 10) {
        alert("Число больше 10");
    } else {
        alert("Число 10 или меньше");
    }
    
    // switch statement
    let color = prompt("Введите цвет (red, green, blue):");
    switch (color) {
        case 'red':
            alert("Вы выбрали красный цвет");
            break;
        case 'green':
            alert("Вы выбрали зелёный цвет");
            break;
        case 'blue':
            alert("Вы выбрали синий цвет");
            break;
        default:
            alert("Неизвестный цвет");
            break;
    }
    
    // return statement (внутри функции)
    function checkNumber(n) {
        if (n > 10) {
            return "Число больше 10";
        } else {
            return "Число 10 или меньше";
        }
    }
    alert(checkNumber(num));
});
