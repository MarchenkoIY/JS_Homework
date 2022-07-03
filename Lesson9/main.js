// ДЗ 7 Задание 1

function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 30 || amount > 100) {
      return 'Недопустимое количество корма.';
  }

  thid._foodAmount = amount;
}

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    return this;
}
    
function Cat(name) {
    Animal.apply(this, arguments);
}
  
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    console.log(this.feed() + 'Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}
    
var barsik = new Cat('Барсик');
    
console.log(barsik.dailyNorm());
barsik.feed();
    
console.log(barsik.dailyNorm(200));
barsik.feed();
    
console.log(barsik.dailyNorm(75));
barsik.stroke().feed().stroke().stroke().feed();


//  ДЗ 7 Задание 2

function deepClone(initialObj) {
    if (Array.isArray(initialObj)) {
        var newObj = [];
    } else {
        var newObj = {};
    }

    for (var key in initialObj) {
        if (typeof initialObj[key] === 'object' && initialObj[key] !== null) {
            newObj[key] = deepClone(initialObj[key]);
        } else {
            newObj[key] = initialObj[key];
        }
    }

    return newObj;
}


var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


// ДЗ 7 Задание 3

function isEquals(initialObj, initialObj2) {
    if (Object.keys(initialObj).length !== Object.keys(initialObj2).length) {
        return false;
    } else {
        for (var key in initialObj) {
            if (!(key in initialObj2)) {
                return false;
            } else {
                if (typeof initialObj[key] !== typeof initialObj2[key]) {
                    return false;
                } else {
                    if (typeof initialObj[key] === 'object' && initialObj[key] !== null) {
                        if (!isEquals(initialObj[key], initialObj2[key])) {
                            return false;
                        }
                    } else if (typeof initialObj[key] === 'function') {
                        if (initialObj[key].toString() !== initialObj2[key].toString()) {
                            return false;
                        }
                    } else if (initialObj[key] !== initialObj2[key]) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
}