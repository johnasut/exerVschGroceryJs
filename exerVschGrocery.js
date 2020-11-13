var shopper = {
    firstName: "Queen",
    lastName: "Latifa",
    budget: 125,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    groceryCart: ["Apples", "Peanuts", "Hammer", "Shovel", "Bleach", "Duct Tape", "Febreeze", "Tarp", "Butter"],
    isSerialKiller: true
};

console.log(shopper.groceryCart)
console.log(shopper.budget);