export default function getRoundedValue(number: number): number {
	if(number > 0){
		return Math.floor(number) 
	} else {
		const result = Math.ceil(number)
		return Object.is(result, -0) ? 0 : result
	}
}
