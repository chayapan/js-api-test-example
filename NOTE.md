# Test Javascript Code

These links got me started.

1. https://www.youtube.com/watch?v=Jv2uxzhPFl4  
2. https://www.makeuseof.com/express-apis-jest-test/

Add type hints in VSCode.
```npm install @types/jest --save-dev```


#### Test Command

jest --watchAll --verbose

Add this to package.json
```
"scripts":{
  ...
  "test": "jest --watchAll --verbose"
  ...
}
```

Then run 
```
npm run test
```


# First Test Case

```
describe('My Stack', () => {

    it('is created empty', () => {
        const stack = new Stack();
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
    it.todo('can push to the top');
    it.todo('can pop off item');
})
```

To make it pass
```
class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
}
```


## 2nd Test: beforeEach

Instead of setting up the object for every test, create a hook that instantiate the object before each test.


```
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
        let item = stack.pop()
        expect(item).toBe(' TEST-ITEM ');
        expect(stack.top).toBe(1);
    });
})
```


## 3rd add pop()


```javascript
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
```


## 4. Add coverage report 

```
    "test": "jest --watchAll --verbose --coverage"
```

## e2e Test


jest-pupeteer can run E2E
Or use Cypress