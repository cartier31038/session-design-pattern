/**
 * 02 - Square Pegs and Round Holes with Mixin
 */
export namespace Adapter2 {
    class RoundHole {
        constructor(private _radius: number) {}

        public fit(peg: RoundPeg): boolean {
            return this._radius > peg.radius
        }
    }

    class RoundPeg {
        constructor(protected _radius: number) {}

        public get radius() {
            return this._radius
        }
    }

    // Rest parameter constructure function type
    type Constructor = new (...args: any[]) => {}

    function SquarePegMixin<TBase extends Constructor>(Base: TBase) {
        return class SquarePeg extends Base {
            private _width: number = 0

            public setWidth(width: number) {
                this._width = width
            }

            public get width() {
                return this._width
            }

            public get radius() {
                return (this.width * Math.sqrt(2)) / 2
            }
        }
    }

    //IIFE (Immediately-Invoked Function Expression)
    ;(() => {
        const roundPeg = new RoundPeg(6)

        const roundHole = new RoundHole(7)
        console.log(roundHole.fit(roundPeg))

        const SquarePegAdapter = SquarePegMixin(RoundPeg)
        const squarePegAdapter = new SquarePegAdapter(0)
        squarePegAdapter.setWidth(8)

        console.log(squarePegAdapter.radius)
        console.log(roundHole.fit(squarePegAdapter))
    })()
}
