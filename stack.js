class stack {
    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
    }
    pop() {
        if (this.isempty()) return 'stack is empty'
        return this.stack.pop()
    }
    peek() {
        if (this.isempty()) return 'stack is empty'
        return this.stack.peek()
    }
    isempty() {
        return this.stack.length === 0
    }
}
var a = new stack;
console.log(a.peek());
str = '(]{}hbu'
a = str.split('')
console.log(a.slice(0,2))
function arr(a) {
    for (var i = 0; i < a.length; i++) {
        s = []
        if (a[i] === '(' || a[i] == '{' || a[i] == '[') {
            s.push(a[i])
            break;
        }
var top=s.pop()
        if (top != a[i]) {
            return false
        }

    }
    return true
}
