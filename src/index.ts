export function* loop(arr: any[]) {
    for (let i = 0; ; i++) {
        if (i === arr.length) i = 0
        yield arr[i]
    }
}

if (!Array.prototype.hasOwnProperty('last')) {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
}

if (!Array.prototype.hasOwnProperty('first')) {
    Array.prototype.first = function () {
        return this[0]
    }
}