export class BalancingSymbols{
    private symbols: string;
    private stack: string[];
    constructor(symbols:string){
        this.symbols = symbols;
        this.stack = [];
    }
    
    check():boolean
    {
        for(let symbol of this.symbols)
        {
            if (symbol == "(" ||  symbol == "[" ||  symbol == "{" )
            { 
                //push all open symbol
                this.stack.push(symbol) 
            }
            else if (symbol == ")" ||  symbol == "]" ||  symbol == "}" ) 
            {
                //pop top symbol in stack to check with close symbol
                let symOpen = this.stack.pop();
                if (symOpen)
                {
                    if (
                        (symOpen == "(" && symbol == ")") ||
                        (symOpen == "[" && symbol == "]") ||
                        (symOpen == "{" && symbol == "}") 
                       )
                       {
                           //continue;  // match
                       }
                       else{
                           console.log("Not Well Form: Not Match");
                           return false; // not match
                       }
                }
                else
                {  
                    console.log("Not Well Form: Extra Closed Symbol");
                    return false;  // empty stack
                }
            }
            else
            {
                console.log("Not Well Form: Unknown Symbol");
                return false; // another symbol
            }
        }

        if (this.stack.pop())
        { 
            console.log("Not Well Form: Extra Opened Symbol");
            return false; //stack is not empty
        }

        console.log("Well Form");
        return true;
    }



    toString(){
        console.log(this.symbols);
    }

}
