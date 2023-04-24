//object constructor 
function Shoes(name, productCode, quantity, value) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.value = value;
}
//creates 5 instances of the Shoes 
let shoes1 = new Shoes("Nike", 2043863399, 5, 110);
let shoes2 = new Shoes("New Balance", 4247916969, 7, 150);
let shoes3 = new Shoes("Asics", 4451825103, 14, 99);
let shoes4 = new Shoes("Converse", 4466767721, 3, 69);
let shoes5 = new Shoes("adidas", 4812917134, 20, 84);

//an array with 5 objects  
let shoesCatalog = [shoes1, shoes2, shoes3, shoes4, shoes5];


//the following function searches for any shoe within the array
function search(key, array) {
    let keys = [];
    for (let i = 0; i < array.length; i++) {
        keys.push(array[i].name)
    }
        console.log(keys);
        if (keys.indexOf(key) != -1) {
            console.log(`${key} is found at index ${keys.indexOf(key)}`)
        }
        else {
            console.log(`${key} is not in the catalog`)
        }
}

//the following function finds the shoe with the lowest value per item.
function lowestValue(array) {
    let keys = [];
    for (let i = 0; i < array.length; i++) {
        keys.push(array[i].value)
    }
        let min = Math.min(...keys);
        console.log(`The loswest value ${min} is at ${shoesCatalog[keys.indexOf(min)].name}`)
}

//the following function finds the shoe with the highest value per item.
function highestValue(array) {
    let keys = [];
    for (let i = 0; i < array.length; i++) {
        keys.push(array[i].value)
    }
        let max = Math.max(...keys);
        // console.log(min);
        // console.log(keys.indexOf(min));
        // console.log(shoesCatalog[keys.indexOf(min)])
        // console.log(shoesCatalog[keys.indexOf(min)].name)
        console.log(`The loswest value ${max} is at ${shoesCatalog[keys.indexOf(max)].name}`)
}
// //the following function orders all of the objects in ascending order.
function ascending(array) {
    let keys = [];
    for (let i = 0; i < array.length; i++) {
        keys.push(array[i].value)
    }
    keys.sort((a, b) => a - b);
    let ascendingOrder = keys.sort((a, b) => a - b);  
    console.log(ascendingOrder)
}

//the following function edits name property of the object
function editName(object, value) {
    object.name = value;
}

// the following function edits Product Code property of the object 
function editProductCode (object, value) {
    object.productCode = value;
}
// the following function edits Quantity property of the object 
function editQuantity (object, value) {
    object.quantity = value;
} 
// the following function edits Value property of the object 
function editValue (object, value) {
    object.value = value;
} 


search("New Balance", shoesCatalog); //calls the function to search for any shoe within the array

lowestValue(shoesCatalog); //calls the function to find the shoe with the lowest value per item.

highestValue(shoesCatalog); //calls the function to find the shoe with the highest value per item.

ascending(shoesCatalog); //calls the function to order all of the objects in ascending order.

editName(shoes1, "crocks") //calls function to edit name Property of the object 
console.log(shoes1);

editProductCode(shoes1, 7348573485) //calls function to edit Product Code property of the object 
console.log(shoes1);

editQuantity(shoes1, 25); //calls function to edit Quantity property of the object 
console.log(shoes1);

editValue(shoes1, 130); //calls function to edit Value property of the object 
console.log(shoes1);






