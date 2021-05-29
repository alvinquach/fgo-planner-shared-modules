import { SchemaDefinitionProperty } from 'mongoose';
import { Schema, SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../validators';

const isValidRgbValue = function(value: number): boolean {
    return value != null && Number.isInteger(value) && value >= 0 && value <= 255;
};

/**
 * Mongoose schema definition property for a RGB value.
 */
const ColorSchemaDefinitionProperty: SchemaDefinitionProperty ={
    type: Number,
    required: true,
    validate: {
        validator: isValidRgbValue,
        message: ValidationStrings.RgbColorValue
    },
    default: 0
};

/**
 * Mongoose schema definition for the `RgbColor` type.
 */
export const ColorSchemaDefinition: SchemaDefinition = {
    r: ColorSchemaDefinitionProperty,
    g: ColorSchemaDefinitionProperty,
    b: ColorSchemaDefinitionProperty
};

/**
 * Mongoose schema for the `RgbColor` type.
 */
export const RgbColorSchema = new Schema(ColorSchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
