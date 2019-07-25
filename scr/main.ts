import { BalancingSymbols } from "./BalancingSymbols"
import { Postfix } from "./Postfix"

let sym : BalancingSymbols = new BalancingSymbols("[*]]");
sym.toString();
sym.check();

let pos : Postfix = new Postfix();
pos.add(6,5,2,3,"+",8,"*","+",3,"+","*");
//pos.add(0,0,0,"*","-");
pos.evaluate();
pos.toString();



// let addSum = (a:number,b:number) => a+b;

// let sum:number = addSum(5,6);

// console.log(sum);

