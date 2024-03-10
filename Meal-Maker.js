const menu = {};
menu.meal = '';
menu.price = 0;
menu.meal = 789; 
menu.price = 'Not a price'; 
console.log(menu);
Object.defineProperty(menu, 'meal', {
  set: function(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this.meal = mealToCheck;
    }
  }
});

Object.defineProperty(menu, 'price', {
  set: function(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this.price = priceToCheck;
    }
  }
});
menu.meal = 'rice'; 
menu.price = 58;
Object.defineProperty(menu, 'todaysSpecial', {
  get: function() {
    if (this.meal && this.price) {
      return `Today's Special is ${this.meal} for $${this.price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
});

console.log(menu.todaysSpecial);
