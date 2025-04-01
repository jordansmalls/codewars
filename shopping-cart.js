// Shopping Cart
/*
You need to implement a simple shopping cart functionality using JavaScript. The cart will store items, allow adding items, removing items, and calculating the total price.

Requirements:

    ShoppingCart Class:
        Create a class named ShoppingCart.
        The constructor should initialize an empty array called items to store the items in the cart.
        Each item in the items array should be an object with the following properties:
            name: The name of the item (string).
            price: The price of the item (number).
            quantity: The quantity of the item (number, default to 1 if not provided).

    addItem(name, price, quantity) Method:
        This method should add a new item to the items array.
        It should take the name (string), price (number), and optional quantity (number) as arguments.
        If an item with the same name already exists in the cart, it should increase the quantity of that item instead of adding a new entry.
        If quantity is not provided, it should default to 1.

    removeItem(name) Method:
        This method should remove an item from the items array.
        It should take the name (string) of the item to remove as an argument.
        If an item with the given name exists in the cart, it should remove the entire item entry from the items array.
        If the item does not exist, the method should do nothing.

    getTotal() Method:
        This method should calculate and return the total price of all items in the cart.
        It should iterate through the items array and multiply the price by the quantity for each item, then sum up these values.
*/

class ShoppingCart {
    constructor() {
        this.items = [];
    }
    /**
     * @description adds an item to the cart; if item is already present, updates the quantity of item.
     * @param {string} name
     * @param {number} price
     * @param {number} quantity
     * @returns {string}
     */
    addItem(name, price, quantity) {
        name = name.toLowerCase();
        quantity = quantity === undefined ? 1 : quantity;

        const index = this.items.findIndex(item => item.name === name);

        if (index !== -1) {
            this.items[index].quantity += quantity;
            return `Added another ${name} to the cart.`;
        } else {
            const newItem = {
                name: name,
                price: price,
                quantity: quantity,
            };
            this.items.push(newItem);
            return `${name} was added to the cart.`;
        }
    }

    /**
     * @description removes an item from the cart, if it exists.
     * @param {string} name
     * @returns {string}
     */
    removeItem(name) {
        name = name.toLowerCase();
        const initialLength = this.items.length;
        this.items = this.items.filter(item => item.name !== name);
        if (this.items.length !== initialLength) {
            return `${name} was removed from the cart.`;
        } else {
            return `${name} is not in the cart.`;
        }
    }

    /**
     * @description returns the total cost of the items within the cart.
     * @returns {number}
     */
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

const cart = new ShoppingCart();

cart.addItem("Laptop", 1200, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Laptop", 1200, 1);

console.log(cart.items);
console.log(cart.getTotal());

cart.removeItem("Mouse");
console.log(cart.items);
console.log(cart.getTotal());
console.log(cart.removeItem("Keyboard"));