var shopper = {
    firstName: "Queen",
    lastName: "Latifa",
    budget: 725,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    groceryCart: [],
    isSerialKiller: false,
    addItem: function(item, cost) {
      if (cost < this.budget && (item === "hammer" || item === "shovel" || item === "tarp" || item === "duct tape" || item === "bleach" || item === "rope")) {
        this.budget -= cost;
        this.groceryCart.push(item);
        this.isSerialKiller = true;
        console.log("Added " + item + " to cart. " + this.budget + " remaining. Watch out for this guy.");
      }
      else if (cost < this.budget) {
        this.budget -= cost;
        this.groceryCart.push(item);
        console.log("Added " + item + " to cart. " + this.budget + " remaining.");
      }
      else {  
        console.log("Insufficient funds for " + item + ".");
      }
    }
};

shopper.addItem("apple", 2);
shopper.addItem("peanuts", 5);
shopper.addItem("butter", 6);
console.log(shopper.isSerialKiller);
shopper.addItem("hammer", 50);
shopper.addItem("shovel", 50);
shopper.addItem("tarp", 15);
shopper.addItem("duct tape", 10);
shopper.addItem("rope", 80);
console.log(shopper.isSerialKiller);
shopper.addItem("Febreeze", 50);
shopper.addItem("handbag", 3000)
console.log(shopper.isSerialKiller);