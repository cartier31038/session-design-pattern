/**
 * 01 - Ligistic by only truck
 */
export namespace FactoryMethod1 {
    class Logistic {
        public planDelivery(good: string) {
            const transport = this.createTransport()
            transport.deliver(good)
        }

        private createTransport() {
            return new Truck()
        }
    }

    class Truck {
        public deliver(good: string) {
            console.log(`Deliver: ${good}`)
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const flashExpress = new Logistic()
        flashExpress.planDelivery('Meiji')
    })()
}
