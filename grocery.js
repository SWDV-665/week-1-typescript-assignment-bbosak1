var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
function createGroceries(groceryList) {
    var returnStatement = 'My grocery list: ';
    for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
        var element = groceryList_1[_i];
        returnStatement = returnStatement + element.name + ". Quantity: " + element.quantity + " ";
    }
    return returnStatement;
}
var groceryList = [];
var banana = new Grocery("banana", 3);
var bread = new Grocery("bread", 5);
var eggs = new Grocery("eggs", 30);
var milk = new Grocery("milk", 4);
var cheese = new Grocery("cheese", 1);
var meat = new Grocery("watermeatmelon", 1);
var pasta = new Grocery("pasta", 7);
groceryList.push(banana);
groceryList.push(bread);
groceryList.push(eggs);
groceryList.push(milk);
groceryList.push(cheese);
groceryList.push(meat);
groceryList.push(pasta);
document.body.textContent = createGroceries(groceryList);
