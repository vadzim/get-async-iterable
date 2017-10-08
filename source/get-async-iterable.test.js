import getAsyncIterable from "./get-async-iterable"

test("get-async-iterable", () => {
	expect(!!getAsyncIterable((async function*() {})())).toBe(true)
	expect(!!getAsyncIterable(null)).toBe(false)
	expect(!!getAsyncIterable({})).toBe(false)
})
