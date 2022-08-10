/**
 * 04 - Vision Prototype with deep clone
 */
export namespace Prototype3 {
    //Abstraction layer
    interface Clone {
        clone(): this
    }

    //Concrete layer
    class VisionPrototype implements Clone {
        public primitiveAbility: any
        public componentBody!: object
        public circularReferenceMind!: Mind

        public clone(): this {
            const clone = Object.create(this)
            clone.componentBody = Object.create(this.componentBody)
            // Cloning an object that has a nested object with back reference
            // requires special treatment. After the cloning is completed, the
            // nested object should point to the cloned object, instead of the
            // original object. Spread operator can be handy for this case.
            clone.circularReferenceMind = {
                ...this.circularReferenceMind,
                prototype: { ...this },
            }

            return clone
        }
    }

    class Mind {
        public prototype

        constructor(prototype: VisionPrototype) {
            this.prototype = prototype
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const vision = new VisionPrototype()
        vision.primitiveAbility = 'Fly'
        vision.componentBody = {
            material: 'Adamantium',
        }
        vision.circularReferenceMind = new Mind(vision)

        const whiteVision = vision.clone()

        if (vision.primitiveAbility === whiteVision.primitiveAbility) {
            console.log(
                `Success: Primitive field ability = ${whiteVision.primitiveAbility} have been copied to a clone.`,
            )
        } else {
            console.log(
                `Failed: Primitive field ability = ${whiteVision.primitiveAbility} have not been copied!`,
            )
        }

        if (vision.componentBody === whiteVision.componentBody) {
            console.log(`Failed: Component body has not been cloned!`)
        } else {
            console.log('Success: Component body has been cloned.')
        }

        if (
            vision.circularReferenceMind === whiteVision.circularReferenceMind
        ) {
            console.log(
                'Failed: Component with back reference has not been cloned!',
            )
        } else {
            console.log(
                'Success: Component with back reference has been cloned.',
            )
        }

        if (
            vision.circularReferenceMind.prototype ===
            whiteVision.circularReferenceMind.prototype
        ) {
            console.log(
                'Failed: Component with back reference is linked to original object!',
            )
        } else {
            console.log(
                'Success: Component with back reference is linked to the clone.',
            )
        }
    })()
}
