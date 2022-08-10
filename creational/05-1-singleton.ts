/**
 * 05 - Singleton
 */
export namespace Singleton1 {
    //Abstraction layer

    //Concrete layer
    class Singleton {
        private static instance: Singleton

        public data1: string = ''
        public data2: number = 0
        /**
         * The Singleton's constructor should always be private to prevent direct
         * construction calls with the `new` operator.
         */
        private constructor() {}

        /**
         * The static method that controls the access to the singleton instance.
         *
         * This implementation let you subclass the Singleton class while keeping
         * just one instance of each subclass around.
         */
        public static getInstance(): Singleton {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton()
            }

            return Singleton.instance
        }

        public getData() {
            console.table(this)
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const s1 = Singleton.getInstance()
        const s2 = Singleton.getInstance()

        if (s1 === s2) {
            console.log(
                'Singleton works, both variables contain the same instance.',
            )
        } else {
            console.log(
                'Singleton failed, variables contain different instances.',
            )
        }

        s1.data1 = 'Hello'
        console.log(s1.data1)
        console.log(s2.data1)
    })()
}
