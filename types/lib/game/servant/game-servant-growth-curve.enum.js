"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServantGrowthCurve = void 0;
/**
 * Enumeration of servant growth curve types. The enum values represent the
 * 'base' value of each type. The actual in-game growth curve ID can be
 * computed by adding the servant's rarity value to this 'base' value. The
 * in-game growth curve IDs are as follows:
 * - 1: Linear 1★
 * - 2: Linear 2★
 * - 3: Linear 3★
 * - 4: Linear 4★
 * - 5: Linear 5★
 * - 6: Reverse S 1★
 * - 7: Reverse S 2★
 * - 8: Reverse S 3★
 * - 9: Reverse S 4★
 * - 10: Reverse S 5★
 * - 12: S 1★ (currently unused)
 * - 12: S 2★
 * - 13: S 3★
 * - 14: S 4★
 * - 15: S 5★
 * - 21: Semi Reverse S 1★ (currently unused)
 * - 22: Semi Reverse S 2★ (currently unused)
 * - 23: Semi Reverse S 3★
 * - 24: Semi Reverse S 4★
 * - 25: Semi Reverse S 5★
 * - 26: Semi S 1★ (currently unused)
 * - 27: Semi S 2★
 * - 28: Semi S 3★
 * - 29: Semi S 4★
 * - 30: Semi S 5★
 */
var GameServantGrowthCurve;
(function (GameServantGrowthCurve) {
    GameServantGrowthCurve[GameServantGrowthCurve["Linear"] = 0] = "Linear";
    GameServantGrowthCurve[GameServantGrowthCurve["ReverseS"] = 5] = "ReverseS";
    GameServantGrowthCurve[GameServantGrowthCurve["S"] = 10] = "S";
    GameServantGrowthCurve[GameServantGrowthCurve["SemiReverseS"] = 20] = "SemiReverseS";
    GameServantGrowthCurve[GameServantGrowthCurve["SemiS"] = 25] = "SemiS";
})(GameServantGrowthCurve = exports.GameServantGrowthCurve || (exports.GameServantGrowthCurve = {}));
