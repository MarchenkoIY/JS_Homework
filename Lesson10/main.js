//ДЗ № 8 Задание 1

function filterNumbersArr(numbers) {
    return numbers.filter(function(element){
        return element > 0;
    });
}

filterNumbersArr([-1, 0, 2, 34, -2]);



//ДЗ № 8 Задание 2

function findPositiveNumber(numbers) {
    return numbers.find(function(element){
        return element > 0;
    });
}

findPositiveNumber([-1, 0, 2, 34, -2]);



//ДЗ № 8 Задание 3

function isPolindrome(str) {
    return str.toLowerCase().split(' ').join('') === str.toLowerCase().split(' ').join('').split('').reverce().join('');
}


isPolindrome('А роза упала на лапу Азора');



//ДЗ № 8 Задание 4

function areAnagrams(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

areAnagrams('кот', 'Отк');



//ДЗ № 8 Задание 5

function divideArr(arr, l) {
    if (l <= 0) {
        return arr;
    } else {
        var newArr = [],   
            begin = 0,
            end = l;

        while (newArr.length < Math.ceil(arr.length / l)) {
            newArr.push(arr.slice(begin, end));
            
            begin += l;
            end += l;
        }
        
        return newArr;
    }
}

divideArr([1, 2, 3, 4, 5], 0);


//ДЗ № 8 Задание 6
//Вариант с логарифмом

function isPowerOfTwo(number) {
    if (Math.log2(number) % 1 === 0) {
        return true;
    }

    return false;
}

isPowerOfTwo(64);
isPowerOfTwo(54);


//Вариант с циклом

function isPowerOfTwo(number) {
    while (number % 1 === 0 && number >= 1) {
        if (number === 1) {
            return true;
        }

        number /= 2;
    }
    
    return false;
}

isPowerOfTwo(64);
isPowerOfTwo(54);
