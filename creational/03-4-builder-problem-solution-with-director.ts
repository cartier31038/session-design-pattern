/**
 * 03 - Car builder Pickup & SUV with builder
 */
export namespace Builder4 {
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

    class ToyotaCarDirector {
        builder: CarBuilder
        constructor(builder: CarBuilder) {
            this.builder = builder
        }

        buildCorePickUp() {
            return this.builder
                .setChassis('Pickup')
                .setEngine('2.8L 4-Cylinder Diesel')
        }

        buildPickUp() {
            return this.buildCorePickUp()
                .setName('Toyota Hilux Revo 2021')
                .setDoors(4)
                .setSeats(4)
                .build()
        }

        buildSUV() {
            return this.buildCorePickUp()
                .setName('Toyota Fortuner 2021')
                .setDoors(5)
                .setSeats(6)
                .build()
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const builder = new ToyotaCarBuilder()
        const director = new ToyotaCarDirector(builder)
        director.buildPickUp().drive()
        director.buildSUV().drive()
    })()
}
