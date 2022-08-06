/**
 * 02- Furniture simulator
 */
export namespace AbstractFactory2 {
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

    class VictorianChair {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("You're sitting on Victorian Chair")
        }
    }

    class VictorianSofa {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("You're sitting on Victorian Sofa")
        }
    }

    class VictorianCoffeeTable {
        public hasLegs() {
            return true
        }

        public sitOn() {
            console.log("Can't sit on Victorian CoffeeTable!!!")
        }
    }

    enum VariantType {
        ArtDeco,
        Victorian,
        Modern,
        General,
    }

    class FurnitureFactory {
        public createChair(variant: VariantType) {
            switch (variant) {
                case VariantType.Victorian:
                    return new VictorianChair()
                default:
                    return new Chair()
            }
        }

        public createSofa(variant: VariantType) {
            return new Sofa()
        }

        public createCoffeeTable(variant: VariantType) {
            switch (variant) {
                case VariantType.Victorian:
                    return new VictorianCoffeeTable()
                default:
                    return new CoffeeTable()
            }
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const generalFurnitureFactory = new FurnitureFactory()
        generalFurnitureFactory.createChair(VariantType.Victorian).sitOn()
        generalFurnitureFactory.createSofa(VariantType.Victorian).sitOn()
        generalFurnitureFactory.createCoffeeTable(VariantType.Victorian).sitOn()
    })()
}
