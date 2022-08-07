/**
 * 03 - Car builder Pickup & SUV
 */
export namespace Builder2 {
    //Abstraction layer

    //Concrete layer
    class Car {
        name: string
        chassis: string
        wheels: number = 4
        doors: number
        seats: number
        engine: string
        nitrous: boolean

        constructor(
            name: string,
            chassis: string,
            doors: number,
            seats: number,
            engine: string,
            nitrous: boolean,
        ) {
            this.name = name
            this.chassis = chassis
            this.doors = doors
            this.seats = seats
            this.engine = engine
            this.nitrous = nitrous

            if (doors > 4) this.wheels = 5
        }

        drive() {
            console.table(this)
        }
    }

    class ToyotaCarBuilder {
        static buildPickUp() {
            return new Car(
                'Toyota Hilux Revo 2021',
                'Pickup',
                4,
                4,
                '2.8L 4-Cylinder Diesel',
                false,
            )
        }

        static buildSUV() {
            return new Car(
                'Toyota Fortuner 2021',
                'Pickup',
                6,
                5,
                '2.8L 4-Cylinder Diesel',
                false,
            )
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const toyotaHilux2021 = ToyotaCarBuilder.buildPickUp()
        toyotaHilux2021.drive()

        const toyotaFortuner2021 = ToyotaCarBuilder.buildSUV()
        toyotaFortuner2021.drive()
    })()
}
