import { Postfix } from "./Postfix";

export class ScientificCalulator{
    private stackOperator: string[];
    private postfix: Postfix;
    private input: string
    constructor(input:string){
            this.input = input;
            this.stackOperator = [];
            this.postfix = new Postfix();
    }

    value():number{
        let numStr : string ="";
        let num: number;
        for(let letter of this.input)
        {
            if (
                letter == "+" || letter == "-" ||
                letter == "*" || letter == "/" ||
                letter == "(" || letter == ")"
                )
            {
                numStr = this.AddNumber(numStr);
                //+ and -
                if (letter == "+" || letter == "-")
                {
                    this.AddSubtract(letter);
                }
                //* /
                else if (letter == "*" || letter == "/")
                {
                    this.MultiDivide(letter);
                }
                //()
                else if (letter == "(" || letter == ")")
                {
                    this.Parenthesis(letter);
                }
            }
            else
            {
                numStr += letter;
            }
        }

        //add last number
        this.AddNumber(numStr)

        //add remain operator
        let op = this.stackOperator.pop();
        while(op != undefined)
        {
            this.postfix.add(op);
            op = this.stackOperator.pop();
        }

        this.postfix.toString();
        return this.postfix.evaluate();
       
    }

    private Parenthesis(letter: string) {
        if (letter == "(") {
            this.stackOperator.push(letter);
        }
        else {
            let op = this.stackOperator.pop();
            while (op != undefined && op != "(") {
                this.postfix.add(op);
                op = this.stackOperator.pop();
            }
        }
    }

    private MultiDivide(letter: string) {
        let op = this.stackOperator.pop();
        if (op == undefined) {
            this.stackOperator.push(letter);
        }
        else if (op == "*" || op == "/") {
            this.postfix.add(op);
            this.stackOperator.push(letter);
        }
        else {
            this.stackOperator.push(op);
            this.stackOperator.push(letter);
        }
    }

    private AddSubtract(letter: string) {
        let op = this.stackOperator.pop();
        while(op != undefined && op != "(")
        {
                this.postfix.add(op);
                op = this.stackOperator.pop();
        }
        
        if (op && op == "(")
        {
            this.stackOperator.push(op);    
        }
        this.stackOperator.push(letter);
    }

    private AddNumber(numStr: string): string {
        if (numStr != "") {
            this.postfix.add(Number(numStr));
        }
        return "";
    }
}