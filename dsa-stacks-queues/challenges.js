const Stack = require("./stack");

const stringReversal = (str) => {
    console.log(str)
    let stack = new Stack()
    for (let i = 0; i < str.length; i++) {
        stack.push(str.charAt(i))
    }

    reversedArr = []
    while(stack.size) {
        let letter = stack.pop()
        reversedArr.push(letter)
    }
    return reversedArr.join('');
}

console.log(stringReversal('hello'))

const isBalanced = str => {
    console.log(str)
    const openBrackets = ['[', '{', '(']
    const closingBrackets = [']', '}', ')']
    const bracketPairs = {
        ']': '[',
        ')': '(',
        '}' : '{'
    }

    let stack = new Stack();
    let arrOfChars = str.split('')

    let balancedOrUnbalanced = null;
    console.log(arrOfChars)

    arrOfChars.forEach(char => {
        if (openBrackets.includes(char)) {
            stack.push(char)
            
        } else if (closingBrackets.includes(char)) {
            let item = stack.pop()
            if (stack.isEmpty() || stack.peek() !== bracketPairs[item]) {
                balancedOrUnbalanced = 'Not balanced'
            }
        }
    });


        
    }



//console.log(isBalanced('(hello'))
//console.log(isBalanced('(nope]'))
//console.log(isBalanced('(hi[there])'))
console.log(isBalanced('((ok)[nope)]'))

