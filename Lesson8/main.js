function Animal(name) {
    var foodAmount = 50;
  
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
  
    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();
  
        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
        }
  
        foodAmount = amount;
    };
  
    this.name = name;
    
    var self = this;
    
    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}
  
function Cat(name) {
    Animal.apply(this, arguments);
      
    var catFeed = this.feed;
    this.feed = function () {
        catFeed();
        
        console.log('Кот доволен ^_^');
        return this;
    };
    
    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    };
}
  
var barsik = new Cat('Барсик');
  
console.log(barsik.dailyNorm());
barsik.feed();
  
console.log(barsik.dailyNorm(200));
barsik.feed();
  
console.log(barsik.dailyNorm(75));
barsik.stroke().feed().stroke().stroke().feed();
