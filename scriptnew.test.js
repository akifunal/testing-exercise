const googleSearch = require('./script')

dbMock = [
	'dog.com',
	'cheesepuff.com',
	'disney.com',
	'dogpictures.com',
	'puppies.com',
	'dogs.com',
	'dog.com/puppy/cheese',
	'disney.com/dog',
	'dogpictures.com/puppy',
]

describe('googleSearch', () => {
	it('is a silly test', () => {
		expect('hello').toBe('hello')
	})

	it('is searching google', () => {
		expect(googleSearch('testtest', dbMock)).toEqual([])
		expect(googleSearch('dog', dbMock)).toEqual([
			'dog.com',
			'dogpictures.com',
			'dogs.com',
		])
	})

	it('works with undefined and null input', () => {
		expect(googleSearch(undefined, dbMock)).toEqual([])
		expect(googleSearch(null, dbMock)).toEqual([])
	})

	it('does not return more than 3 matches', () => {
		expect(googleSearch('.com', dbMock).length).toBe(3)
	})
})
