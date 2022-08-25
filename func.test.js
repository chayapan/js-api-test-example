class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        let item = this.items[this.top];
        this.top -= 1;
        return item;
    }
}

describe('My Stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        const stack = new Stack();
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
    it('can push to the top', () => {
        stack.push(' TEST-ITEM ');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe(' TEST-ITEM ');
    });
    it('can pop off item', () => {
        stack.push('TEST2'); // start empty
        let item = stack.pop()
        expect(item).toBe('TEST2');
        expect(stack.top).toBe(-1);
    });
})