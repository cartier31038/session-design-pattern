/**
 * 03 - Ligistic by truck & ship with Factory Method
 */
export namespace FactoryMethod3 {
    /**
     * Abstraction layer
     */
    abstract class Logistic {
        public planDelivery(good: string) {
            const transport = this.createTransport()
            transport.deliver(good)
        }

        protected abstract createTransport(): Transport
    }

    /**
     * Implementation layer
     */
    interface Transport {
        deliver(good: string): void
    }

    class SeaLogistic extends Logistic {
        protected createTransport() {
            return new Ship()
        }
    }

    class LandLogistic extends Logistic {
        protected createTransport() {
            return new Truck()
        }
    }

    class Truck implements Transport {
        public deliver(good: string) {
            console.log(`Deliver: ${good} by land in box`)
        }
    }

    class Ship implements Transport {
        public deliver(good: string) {
            console.log(`Deliver: ${good} by sea in container`)
        }

        public sink() {
            console.log('Goodbye :boom:')
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const flashExpress = new LandLogistic()
        flashExpress.planDelivery('Meiji')

        const flashSeaExpress = new SeaLogistic()
        flashSeaExpress.planDelivery('Meiji')
    })()
}
