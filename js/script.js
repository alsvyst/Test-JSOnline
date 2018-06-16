console.log('Для запуска игры введите game.start()')

const game = (function () {

    function Question(quest, answers, trueNumber) {
        this.quest = quest;
        this.answers = answers;
        this.trueNumber = trueNumber;
    }

    let questionsList = [];

    function questionsListAdd(quest, answers, trueNumber) {
        let newQ = new Question(quest, answers, trueNumber);
        questionsList.push(newQ);
    }

    questionsListAdd('Что делает оператор === ?', ['Сравнивает по ссылке, а не по значению.', 'Сравнивает без приведения типа.', 'Нет такого оператора.'], '1');
    questionsListAdd('Сколько параметров можно передать функции?', ['Ровно столько, сколько указано в определении функции.', 'Сколько указано в определении функции или меньше.', 'Сколько указано в определении функции или больше.', 'Любое количество.'], '3');
    questionsListAdd('Сколько "примитивных" типов данных в языке JS?', ['2', '3', '4', '5'], '3');

    function start() {
        let counter = 0;
        for (i = 0; i < questionsList.length; i++) {
            postQuestion(questionsList[i]);
            const answer = getAnswer(questionsList[i]);
            if (answer === 'stop') {
                console.log('"Игра остановлена!"');
                return;
            } else if (answer === questionsList[i].trueNumber) {
                counter++;
                trueAnswer(counter);
            } else {
                falseAnswer();
            }
        }
        console.log('Вы прошли игру!')
    }

    function postQuestion(test) {
        console.log(test.quest);
        for (let i = 0; i < test.answers.length; i++) {
            console.log(i + ': ' + test.answers[i]);
        }
    }

    function getAnswer(test) {
        return prompt('Введите номер ответа', '') + '';
    }

    function trueAnswer(counter) {
        console.log('Правильный ответ!');
        console.log('Ваш результат: ' + counter );
        console.log('-------------');
    }

    function falseAnswer() {
        console.log('Вы проиграли! Начинаем заново!');
        console.log('-------------');
        start();
    }

    return {
        start,
        questionsListAdd
    }
})();