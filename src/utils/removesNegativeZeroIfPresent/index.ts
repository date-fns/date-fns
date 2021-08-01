export default function removesNegativeZeroIfPnumberent(number:number) : number {
    return Object.is(number, -0) ? 0 : number
}