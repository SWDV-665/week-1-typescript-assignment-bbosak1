class Grocery {
  constructor(
    public name: string,
    public quantity: number,
    public price: number,
  ) {
  }
}

function createGroceries(groceryList) {
  let returnStatement = 'My grocery list:';
  for (let element of groceryList) {
    returnStatement = returnStatement + " Item: " + element.name + ". Quantity: " + element.quantity + ". Price: " + element.price;
  }
  return returnStatement;
}

const groceryList = [];
let banana = new Grocery("banana",3,0.35);
let bread = new Grocery("bread",5,2.25);
let eggs = new Grocery("eggs",30,0.99);
let milk = new Grocery("milk",4,1.79);
let cheese = new Grocery("cheese",1,3.50);
let meat = new Grocery("watermeatmelon",1,3.50);
let pasta = new Grocery("pasta",7,2.40);
groceryList.push(banana);
groceryList.push(bread);
groceryList.push(eggs);
groceryList.push(milk);
groceryList.push(cheese);
groceryList.push(meat);
groceryList.push(pasta);

document.body.textContent = createGroceries(groceryList);
