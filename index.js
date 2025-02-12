Ось простий приклад обробки даних в JavaScript, де ми використовуємо об'єкти, масиви, цикли та умови.

```javascript
// Оголошення об'єкту
let student1 = {
    name: 'John',
    scores: [85, 90, 75, 88, 92]
};

let student2 = {
    name: 'Jane',
    scores: [78, 82, 69, 95, 85]
};

let student3 = {
    name: 'Tom',
    scores: [92, 89, 79, 88, 90]
};

// Масив студентів
let students = [student1, student2, student3];

// Функція для обчислення середнього балу
function calculateAverage(scores) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Функція для визначення максимального балу
function findHighestScore(scores) {
    let highScore = 0;
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

// Функція для обробки даних студента
function processStudentData(student) {
    console.log('Student: ' + student.name);
    let average = calculateAverage(student.scores);
    console.log('Average Score: ' + average);
    let highScore = findHighestScore(student.scores);
    console.log('Highest Score: ' + highScore);

    if(average > 85) {
        console.log('Grade: A');
    } else if(average > 70) {
        console.log('Grade: B');
    } else if(average > 50) {
        console.log('Grade: C');
    } else {
        console.log('Grade: F');
    }

    console.log('----------------------');
}

// Обробка даних кожного студента
for(let i = 0; i < students.length; i++) {
    processStudentData(students[i]);
}
```
Цей код виконує наступні кроки:

1. Оголошує три об'єкти, які представляють студентів.
2. Кожен студент має ім'я та масив оцінок.
3. Створюється масив, що містить всіх студентів.
4. Є функції для обчислення середнього балу та визначення найвищого балу.
5. Є функція, що обробляє дані кожного студента, використовуючи раніше створені функції.
6. Виводить ім'я студента, середню оцінку, найвищу оцінку та оцінку.
7. Цикл, який виконує обробку даних для кожного студента в масиві.