import { greet } from './'

describe('greet function test', () => {
	test('returns a string', () => {
		const str = greet()
		expect(typeof str).toEqual('string')
	})
})