var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
function createGroceries(groceryList) {
    var returnStatement = 'My grocery list:';
    for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
        var element = groceryList_1[_i];
        returnStatement = returnStatement + " Item: " + element.name + ". Quantity: " + element.quantity + ". Price: " + element.price;
    }
    return returnStatement;
}
var groceryList = [];
var banana = new Grocery("banana", 3, 0.35);
var bread = new Grocery("bread", 5, 2.25);
var eggs = new Grocery("eggs", 30, 0.99);
var milk = new Grocery("milk", 4, 1.79);
var cheese = new Grocery("cheese", 1, 3.50);
var meat = new Grocery("watermeatmelon", 1, 3.50);
var pasta = new Grocery("pasta", 7, 2.40);
groceryList.push(banana);
groceryList.push(bread);
groceryList.push(eggs);
groceryList.push(milk);
groceryList.push(cheese);
groceryList.push(meat);
groceryList.push(pasta);
document.body.textContent = createGroceries(groceryList);
