// @flow

export default function getAsyncIterable(value: any): AsyncIterable<*> | void {
	if (value && typeof value[(Symbol: any).asyncIterator] === "function") {
		return value
	}
}
