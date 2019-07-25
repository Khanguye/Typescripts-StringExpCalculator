"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Postfix = (function () {
    function Postfix() {
        this.inputStack = [];
    }
    Postfix.prototype.add = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        values.forEach(function (value) { return _this.inputStack.unshift(value); });
    };
    Postfix.prototype.evaluate = function () {
        var inputStack = this.inputStack.slice(0);
        var calStack = [];
        var value = inputStack.pop();
        while (value != undefined) {
            if (typeof (value) == "number") {
                calStack.push(value);
                console.log(calStack);
            }
            else if (value == "+" || value == "-" || value == "*" || value == "/") {
                var num1_1 = calStack.pop();
                var num2_1 = calStack.pop();
                if (num1_1 != undefined && num2_1 != undefined) {
                    if (value == "+") {
                        calStack.push(num2_1 + num1_1);
                        console.log(calStack);
                    }
                    if (value == "-") {
                        calStack.push(num2_1 - num1_1);
                        console.log(calStack);
                    }
                    if (value == "*") {
                        calStack.push(num2_1 * num1_1);
                        console.log(calStack);
                    }
                    if (value == "/") {
                        calStack.push(num2_1 / num1_1);
                        console.log(calStack);
                    }
                }
                else {
                    console.log("Need 2 numbers to operator");
                    return NaN;
                }
            }
            else {
                console.log("Unknown Symbol");
                return NaN;
            }
            value = inputStack.pop();
        }
        var num1 = calStack.pop();
        var num2 = calStack.pop();
        if (num2) {
            console.log("More results");
            return NaN;
        }
        if (num1 != undefined) {
            console.log(num1);
            return num1;
        }
        console.log("Empty result");
        return NaN;
    };
    Postfix.prototype.toString = function () {
        console.log(this.inputStack.join("").split("").reverse().join(""));
    };
    return Postfix;
}());
exports.Postfix = Postfix;
