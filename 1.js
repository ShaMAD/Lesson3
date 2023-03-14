let userInput = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсия: ${userInput}\nФаренгейт: ${Math.round((9 / 5) * userInput + 32)}`)
