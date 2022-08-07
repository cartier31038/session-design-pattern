/**
 * 03 - Car builder only Pickup
 */
export namespace Builder1 {
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
        }

        drive() {
            console.table(this)
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const toyotaHilux2000 = new Car(
            'Toyota Hilux Revo 2000',
            'Pickup',
            2,
            2,
            '2.6L 4-Cylinder Diesel',
            false,
        )
        toyotaHilux2000.drive()
    })()
}
