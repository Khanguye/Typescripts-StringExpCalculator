export class Postfix{
    private inputStack: (string|number)[];

    constructor(){
        this.inputStack = [];
      
    }
    
    add(...values: (string|number)[])
    {
        values.forEach((value)=> this.inputStack.unshift(value));
    }
    
    evaluate(): number
    {
        let inputStack = this.inputStack.slice(0);
        let calStack : number[] = [];
        let value = inputStack.pop();
        while (value != undefined)
        {
        
        if (typeof(value) == "number")
        {
            calStack.push(value);
            console.log(calStack);
        }
        else if (value == "+" || value == "-" || value == "*" || value == "/")
        {
            let num1 = calStack.pop();
            let num2 = calStack.pop();
            if (num1 != undefined && num2 != undefined)
            {
                if (value == "+")
                {
                    calStack.push(num2+num1);   
                    console.log(calStack);  
                }
                if (value == "-")
                {
                    calStack.push(num2-num1);
                    console.log(calStack);
                }
                if (value == "*")
                {
                    calStack.push(num2*num1);
                    console.log(calStack);
                }
                if (value == "/")
                {
                    calStack.push(num2/num1);
                    console.log(calStack);
                }
            }
            else
            {
                console.log("Need 2 numbers to operator");
                return NaN; //Less than 2 items in stack
            }
        }
        else
        {
            console.log("Unknown Symbol");
            return NaN; //Unknown Symbol
        }
        value = inputStack.pop();
    }
        let num1 = calStack.pop();
        let num2 = calStack.pop();  
        
        if (num2)
        {
            console.log("More results");
            return NaN; //at least two numbers in stack
        }
        
        if (num1 != undefined)
        {
            console.log(num1);
            return num1; //only one number in stack
        }
        console.log("Empty result");
        return NaN; //no number in stack

    }

    toString(){
        console.log(this.inputStack.join(""));
        console.log(this.inputStack.join("").split("").reverse().join(""));
    }

}
