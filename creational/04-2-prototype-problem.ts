/**
 * 04 - Vision Prototype with shallow clone
 */
export namespace Prototype2 {
    //Abstraction layer

    //Concrete layer
    class VisionPrototype {
        public primitiveAbility: any
        public componentBody!: object
        public circularReferenceMind!: Mind

        public clone(): this {
            const clone = Object.create(this)
            clone.componentBody = Object.create(this.componentBody)
            // Invalid pointing nested object point to the original object.
            clone.circularReferenceMind = Object.create(
                this.circularReferenceMind,
            )

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
