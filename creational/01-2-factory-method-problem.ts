/**
 * 02 - Ligistic by truck & ship
 */
export namespace FactoryMethod2 {
    class Logistic {
        public planDelivery(good: string, type: TransportType) {
            const transport = this.createTransport(type)
            transport.deliver(good)
        }

        private createTransport(type: TransportType) {
            switch (type) {
                case TransportType.Truck:
                    return new Truck()
                case TransportType.Ship:
                    return new Ship()
            }
        }
    }

    enum TransportType {
        Truck,
        Ship,
    }

    class Truck {
        public deliver(good: string) {
            console.log(`Deliver: ${good}`)
        }
    }

    class Ship {
        public deliver(good: string) {
            console.log(`Deliver: ${good}`)
        }

        public sink() {
            console.log('Goodbye :boom:')
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const flashExpress = new Logistic()
        flashExpress.planDelivery('Meiji', TransportType.Truck)

        const flashSeaExpress = new Logistic()
        flashSeaExpress.planDelivery('Meiji', TransportType.Ship)
    })()
}
