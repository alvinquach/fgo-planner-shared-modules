/**
 * Mongoose validation message strings.
 */
export declare class ValidationStrings {
    static readonly GenericInvalid = "Path `{PATH}` ({VALUE}) is invalid.";
    static readonly GenericInvalidFormat = "Path `{PATH}` ({VALUE}) is in an incorrect format.";
    static readonly GenericInvalidValue = "Path `{PATH}` ({VALUE}) contains an invalid value.";
    static readonly GenericInvalidValuePathOnly = "Path `{PATH}` contains an invalid value.";
    static readonly NumberInteger = "Path `{PATH}` ({VALUE}) is not an integer.";
    static readonly NumberMin = "";
    static readonly NumberMax = "";
    static readonly MasterFriendIdFormat: string;
    static readonly MasterServantFirstSkillUnlocked: string;
    static readonly MasterServantUniqueInstanceId: string;
}
