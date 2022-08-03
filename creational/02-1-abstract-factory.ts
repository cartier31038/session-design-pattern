/**
 * 02- Furniture simulator
 */
export namespace AbstractFactory1 {
    class Chair {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("You're sitting on general Chair")
        }
    }

    class Sofa {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("You're sitting on general Sofa")
        }
    }

    class CoffeeTable {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("Can't sit on general CoffeeTable!!!")
        }
    }

    class FurnitureFactory {
        public createChair() {
            return new Chair()
        }

        public createSofa() {
            return new Sofa()
        }

        public createCoffeeTable() {
            return new CoffeeTable()
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const generalFurnitureFactory = new FurnitureFactory()
        generalFurnitureFactory.createChair().sitOn()
        generalFurnitureFactory.createSofa().sitOn()
        generalFurnitureFactory.createCoffeeTable().sitOn()
    })()
}
