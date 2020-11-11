import { loop } from './'

describe('loop tests', () => {
	test('loops around end of array', () => {
		const arr = [1, 2, 3]
		const looper = loop(arr)

		expect(looper.next().value).toBe(1)
		expect(looper.next().value).toBe(2)
		expect(looper.next().value).toBe(3)
		expect(looper.next().value).toBe(1)
	})
})

describe('Array prototype tests', () => {
	test('#last returns value at last index', () => {
		const arr = [1, 2, 3]

		expect(arr.last()).toBe(3)
		arr[2] = 100
		expect(arr.last()).toBe(100)
	})

	test('#first returns value at first index', () => {
		const arr = [1, 2, 3]

		expect(arr.first()).toBe(1)
		arr[0] = 100
		expect(arr.first()).toBe(100)
	})
})