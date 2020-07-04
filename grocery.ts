class Grocery {
  constructor(
    public name: string,
    public quantity: number
  ) {
  }
}

function createGroceries(groceryList) {
  let returnStatement = 'My grocery list: ';
  for (let element of groceryList) {
    returnStatement = returnStatement + element.name + ". Quantity: " + element.quantity + " ";
  }
  return returnStatement;
}

const groceryList = [];
let banana = new Grocery("banana",3);
let bread = new Grocery("bread",5);
let eggs = new Grocery("eggs",30);
let milk = new Grocery("milk",4);
let cheese = new Grocery("cheese",1);
let meat = new Grocery("watermeatmelon",1);
let pasta = new Grocery("pasta",7);
groceryList.push(banana);
groceryList.push(bread);
groceryList.push(eggs);
groceryList.push(milk);
groceryList.push(cheese);
groceryList.push(meat);
groceryList.push(pasta);

document.body.textContent = createGroceries(groceryList);
