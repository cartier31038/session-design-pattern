/**
 * 02 - Furniture simulator multiple variant with Abstract Factory and Showroom client
 */
export namespace AbstractFactory3 {
    //Abstraction layer
    interface Chair {
        hasLegs(): boolean
        sitOn(): void
    }

    interface Sofa {
        hasLegs(): boolean
        sitOn(): void
    }

    interface CoffeeTable {
        hasLegs(): boolean
        sitOn(): void
    }

    //Concrete layer
    class ModernChair implements Chair {
        public hasLegs() {
            return false
        }

        public sitOn() {
            console.log("You're sitting on Modern Chair")
        }
    }

    class ModernSofa implements Sofa {
        public hasLegs() {
            return false
        }

        public sitOn() {
            console.log("You're sitting on Modern Sofa")
        }
    }

    class ModernCoffeeTable implements CoffeeTable {
        public hasLegs() {
            return false
        }

        public sitOn() {
            console.log("Can't sit on Modern CoffeeTable!!!")
            return false
        }
    }

    class VictorianChair implements Chair {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("You're sitting on Victorian Chair")
        }
    }

    class VictorianSofa implements Sofa {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("You're sitting on Victorian Sofa")
        }
    }

    class VictorianCoffeeTable implements CoffeeTable {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("Can't sit on Victorian CoffeeTable!!!")
        }
    }

    interface FurnitureFactory {
        createChair(): Chair
        createSofa(): Sofa
        createCoffeeTable(): CoffeeTable
    }

    class ModernFurnitureFactory implements FurnitureFactory {
        public createChair() {
            return new ModernChair()
        }

        public createSofa() {
            return new ModernSofa()
        }

        public createCoffeeTable() {
            return new ModernCoffeeTable()
        }
    }

    class VictorianFurnitureFactory implements FurnitureFactory {
        public createChair() {
            return new VictorianChair()
        }

        public createSofa() {
            return new VictorianSofa()
        }

        public createCoffeeTable() {
            return new VictorianCoffeeTable()
        }
    }

    class ShowRoom {
        factory: FurnitureFactory
        constructor(factory: FurnitureFactory) {
            this.factory = factory
        }

        package(): [Chair, Sofa, CoffeeTable] {
            return [
                this.factory.createChair(),
                this.factory.createSofa(),
                this.factory.createCoffeeTable(),
            ]
        }

        test() {
            this.package().forEach((furniture) => furniture.sitOn())
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const modernShowRoom = new ShowRoom(new ModernFurnitureFactory())
        modernShowRoom.test()

        const victorianShowRoom = new ShowRoom(new VictorianFurnitureFactory())
        victorianShowRoom.test()
    })()
}
