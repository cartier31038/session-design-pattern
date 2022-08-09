/**
 * 04 - Vision with copy value
 */
export namespace Prototype1 {
    //Abstraction layer

    //Concrete layer
    class Vision {
        public primitiveAbility: any
        public componentBody!: object
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const vision = new Vision()
        vision.primitiveAbility = 'Fly'
        vision.componentBody = {
            material: 'Adamantium',
        }

        const whiteVision = new Vision()
        whiteVision.primitiveAbility = vision.primitiveAbility
        whiteVision.componentBody = vision.componentBody
        // whiteVision.componentBody = Object.create(vision.componentBody)

        // const whiteVision = { ...vision }

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
    })()
}
