//ДЗ № 9 Задание 1

function createArrayOfObject(arr) {
    return arr.map (function (element) {
        return {name: element};
    });
}

createArrayOfObject(['Vasya', 'Pyotr', 'Ivan']);



//ДЗ № 9 Задание 2

function setTime(arr) {
    return  arr.reduce(function(accumulator, element) {
        return accumulator + ' : ' + element;
    }, 'Текущее время');
}

setTime(['00', '02', '15']);



//ДЗ № 9 Задание 3

function countVowels(str) {
    var vowels = ['у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю', 'e', 'u', 'i', 'o', 'a'],
        counter = 0;
    
    str = str.toLowerCase().split('');

    str.forEach(function(element){
        if (vowels.indexOf(element) !== -1) {
            counter++;
        }
    });

    return counter;
}

countVowels('общественный, публичный, открытый, государственный, общедоступный, народный');



//ДЗ № 9 Задание 4

function countSentencesLetters(str) {
    var reg = new RegExp(/\.|!|\?/g),
        reg2 = new RegExp(/\,|\s/g);

    str = str.split(reg);

    str.forEach(function(element) {
        var l = 0;
        element.split(reg2).forEach(function(el){
            return l += el.length;
        });
        if(element.length > 0) {
            console.log(element + ': Letters quantity is: ' + l);
        }
    });
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');



//ДЗ № 9 Задание 5

function findMaxRepeatedWord(str) {
    var reg = new RegExp(/\,|\.|\?|\!|\s|\:/g),
        word = '',
        maxValue = 0;

    str = str.toLowerCase().split(reg);

    for (var i = 0; i < str.length; i++) {
        var counter = 1;
        
        for (var j = 0; j < str.length; j++) {
            if(i !== j && str[i] === str[j] && str[j]) {
                counter++;
            }
        }

        if(counter > maxValue) {
            maxValue = counter;
            word = str[i];
        }
    }
    
    return 'Максимальное число повторений у слова "' + word + '" - ' + maxValue;
}

findMaxRepeatedWord('Привет, студент! Студент... Как дела, студент?');
