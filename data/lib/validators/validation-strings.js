"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationStrings = void 0;
/* eslint-disable max-len */
/**
 * Mongoose validation message strings.
 */
class ValidationStrings {
}
exports.ValidationStrings = ValidationStrings;
///#region Generic validation messages
ValidationStrings.GenericInvalid = 'Path `{PATH}` ({VALUE}) is invalid.';
ValidationStrings.GenericInvalidFormat = 'Path `{PATH}` ({VALUE}) is in an incorrect format.';
ValidationStrings.GenericInvalidValue = 'Path `{PATH}` ({VALUE}) contains an invalid value.';
ValidationStrings.GenericInvalidValuePathOnly = 'Path `{PATH}` contains an invalid value.';
//#endregion
//#region Number validation messages
ValidationStrings.NumberInteger = 'Path `{PATH}` ({VALUE}) is not an integer.';
ValidationStrings.NumberMin = ''; // TODO Implement this
ValidationStrings.NumberMax = ''; // TODO Implement this
ValidationStrings.RgbColorValue = `${ValidationStrings.GenericInvalidFormat} Value must be an integer from 0-255.`;
//#endregion
//#region Master account validation messages
ValidationStrings.MasterFriendIdFormat = `${ValidationStrings.GenericInvalidFormat} It must be exactly 9 characters long and can only contain numerical digits.`;
ValidationStrings.MasterServantFirstSkillUnlocked = `${ValidationStrings.GenericInvalidValue} The first skill must always be unlocked.`;
ValidationStrings.MasterServantUniqueInstanceId = `${ValidationStrings.GenericInvalidValuePathOnly} Servant instanceIds must be unique.`;
