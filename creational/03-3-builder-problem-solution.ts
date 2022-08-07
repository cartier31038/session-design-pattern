/**
 * 03 - Car builder Pickup & SUV with builder
 */
export namespace Builder3 {
    //Abstraction layer
    interface CarBuilder {
        reset(): this
        setName(name: string): this
        setChassis(chassis: string): this
        setDoors(doors: number): this
        setSeats(seats: number): this
        setEngine(engine: string): this
        setNitrous(nitrous: boolean): this
        build(): Car
    }

    //Concrete layer
    class Car {
        name: string
        chassis: string
        wheels: number = 4
        doors: number
        seats: number
        engine: string
        nitrous: boolean
        options: string = ''

        constructor(
            name: string = '',
            chassis: string = '',
            doors: number = 0,
            seats: number = 0,
            engine: string = '',
            nitrous: boolean = false,
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

    class ToyotaCarBuilder implements CarBuilder {
        private car!: Car

        constructor() {
            this.reset()
        }

        reset() {
            this.car = new Car()
            return this
        }

        setChassis(chassis: string) {
            this.car.chassis = chassis
            return this
        }

        setName(name: string) {
            this.car.name = name
            return this
        }

        setDoors(doors: number) {
            this.car.doors = doors
            if (doors >= 5) this.car.wheels = 5
            return this
        }

        setSeats(seats: number) {
            this.car.seats = seats
            if (this.car.doors >= 5) this.car.options = 'เบาะพับได้'
            return this
        }

        setEngine(engine: string) {
            this.car.engine = engine
            return this
        }

        setNitrous(nitrous: boolean) {
            this.car.nitrous = nitrous
            return this
        }

        build(): Car {
            const result = this.car
            this.reset()
            return result
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const builder = new ToyotaCarBuilder()
        const toyotaHilux2021 = builder
            .setName('Toyota Hilux Revo 2021')
            .setChassis('Pickup')
            .setDoors(4)
            .setSeats(4)
            .setEngine('2.8L 4-Cylinder Diesel')
            .build()
        toyotaHilux2021.drive()

        const toyotaFortuner2021 = builder
            .setName('Toyota Fortuner 2021')
            .setChassis('Pickup')
            .setSeats(6)
            .setDoors(5)
            .setEngine('2.8L 4-Cylinder Diesel')
            .build()
        toyotaFortuner2021.drive()

        // const toyotaFortuner2022 = builder
        //     .setName('Toyota Fortuner 2022')
        //     .setChassis('Pickup')
        //     .setDoors(5)
        //     .setSeats(6)
        //     .setEngine('2.8L 4-Cylinder Diesel')
        //     .make()
        // toyotaFortuner2022.drive()
    })()
}
