import { MasterServant } from '../../types';
export declare class MasterAccountValidators {
    /**
     * Regex for checking if a friend ID string is in a valid format. Friend IDs
     * must be exactly 9 characters long and can only contain numerical digits.
     */
    private static readonly _FriendIdFormatValidationRegex;
    /**
     * Validator function that tests the friend ID format validation RegExp against
     * the given friend ID string to check if it's in a valid format.
     */
    static isFriendIdFormatValid(id: string): boolean;
    /**
     * Validator function that tests the friend ID format validation RegExp against
     * the given friend ID string to check if it's in a valid format. Null or empty
     * inputs will return true.
     */
    static isFriendIdFormalValidOrEmpty(id: string | null | undefined): boolean;
    /**
     * Validator function that checks if a servant's fou upgrade value is valid. If
     * the value is less than or equal to 1000, the value must be a multiple of 10.
     * Otherwise, the value must be a multiple of 20.
     */
    static isFouValueValid(value: number): boolean;
    static servantInstanceIdsUnique(servants: MasterServant[]): boolean;
}
