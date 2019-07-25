"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BalancingSymbols = (function () {
    function BalancingSymbols(symbols) {
        this.symbols = symbols;
        this.stack = [];
    }
    BalancingSymbols.prototype.check = function () {
        for (var _i = 0, _a = this.symbols; _i < _a.length; _i++) {
            var symbol = _a[_i];
            if (symbol == "(" || symbol == "[" || symbol == "{") {
                this.stack.push(symbol);
            }
            else if (symbol == ")" || symbol == "]" || symbol == "}") {
                var symOpen = this.stack.pop();
                if (symOpen) {
                    if ((symOpen == "(" && symbol == ")") ||
                        (symOpen == "[" && symbol == "]") ||
                        (symOpen == "{" && symbol == "}")) {
                    }
                    else {
                        console.log("Not Well Form: Not Match");
                        return false;
                    }
                }
                else {
                    console.log("Not Well Form: Extra Closed Symbol");
                    return false;
                }
            }
            else {
                console.log("Not Well Form: Unknown Symbol");
                return false;
            }
        }
        if (this.stack.pop()) {
            console.log("Not Well Form: Extra Opened Symbol");
            return false;
        }
        console.log("Well Form");
        return true;
    };
    BalancingSymbols.prototype.toString = function () {
        console.log(this.symbols);
    };
    return BalancingSymbols;
}());
exports.BalancingSymbols = BalancingSymbols;
