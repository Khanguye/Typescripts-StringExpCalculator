"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Postfix_1 = require("./Postfix");
var ScientificCalulator = (function () {
    function ScientificCalulator(input) {
        this.input = input;
        this.stackOperator = [];
        this.postfix = new Postfix_1.Postfix();
    }
    ScientificCalulator.prototype.value = function () {
        var numStr = "";
        var num;
        for (var _i = 0, _a = this.input; _i < _a.length; _i++) {
            var letter = _a[_i];
            if (letter == "+" || letter == "-" ||
                letter == "*" || letter == "/" ||
                letter == "(" || letter == ")") {
                numStr = this.AddNumber(numStr);
                if (letter == "+" || letter == "-") {
                    this.AddSubtract(letter);
                }
                else if (letter == "*" || letter == "/") {
                    this.MultiDivide(letter);
                }
                else if (letter == "(" || letter == ")") {
                    this.Parenthesis(letter);
                }
            }
            else {
                numStr += letter;
            }
        }
        this.AddNumber(numStr);
        var op = this.stackOperator.pop();
        while (op != undefined) {
            this.postfix.add(op);
            op = this.stackOperator.pop();
        }
        this.postfix.toString();
        return this.postfix.evaluate();
    };
    ScientificCalulator.prototype.Parenthesis = function (letter) {
        if (letter == "(") {
            this.stackOperator.push(letter);
        }
        else {
            var op = this.stackOperator.pop();
            while (op != undefined && op != "(") {
                this.postfix.add(op);
                op = this.stackOperator.pop();
            }
        }
    };
    ScientificCalulator.prototype.MultiDivide = function (letter) {
        var op = this.stackOperator.pop();
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
    };
    ScientificCalulator.prototype.AddSubtract = function (letter) {
        var op = this.stackOperator.pop();
        while (op != undefined && op != "(") {
            this.postfix.add(op);
            op = this.stackOperator.pop();
        }
        if (op && op == "(") {
            this.stackOperator.push(op);
        }
        this.stackOperator.push(letter);
    };
    ScientificCalulator.prototype.AddNumber = function (numStr) {
        if (numStr != "") {
            this.postfix.add(Number(numStr));
        }
        return "";
    };
    return ScientificCalulator;
}());
exports.ScientificCalulator = ScientificCalulator;
