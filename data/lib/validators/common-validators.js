"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonValidators = void 0;
class CommonValidators {
    /**
     * Checks if the given number is either null (or undefined) or an integer.
     * This can be used as a validator function for optional number fields in
     * place of `Number.isInteger`.
     */
    static isNullOrInteger(number) {
        if (number == null) {
            return true;
        }
        return Number.isInteger(number);
    }
}
exports.CommonValidators = CommonValidators;
