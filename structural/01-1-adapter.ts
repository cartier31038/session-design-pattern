/**
 * 01 - Squre Pegs and Round Holes
 */
export namespace Adapter1 {
    class RoundHole {
        constructor(private radius: number) {}

        public fit(peg: RoundPeg): boolean {
            return this.radius > peg.radius
        }
    }

    class RoundPeg {
        constructor(protected _radius: number) {}

        public get radius() {
            return this._radius
        }
    }

    class SquarePeg {
        constructor(protected _width: number) {}

        public get width() {
            return this._width
        }
    }

    class SquarePegAdapter extends RoundPeg {
        constructor(protected squarePeg: SquarePeg) {
            super(0)
            this._radius = this.getRadius()
        }

        public getRadius(): number {
            return (this.squarePeg.width * Math.sqrt(2)) / 2
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const roundHole = new RoundHole(5)

        const roundPeg = new RoundPeg(6)
        console.log(roundHole.fit(roundPeg))

        const squarePeg = new SquarePeg(8)
        const squarePegAdapter = new SquarePegAdapter(squarePeg)
        console.log(squarePegAdapter.getRadius())
        console.log(roundHole.fit(squarePegAdapter))
    })()
}
