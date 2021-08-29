import { Schema, SchemaDefinition } from 'mongoose';
import { RgbaColorSchema } from '../rgba-color.schema';

/**
 * Mongoose schema for the `UserWebClientTheme` type.
 */
const UserWebClientThemeSchema = new Schema({
    backgroundImageUrl: {
        type: String,
        // TODO Add URL validation
    },
    backgroundColor: {
        type: RgbaColorSchema,
        required: true
    },
    foregroundColor: {
        type: RgbaColorSchema,
        required: true
    },
    primaryColor: {
        type: RgbaColorSchema,
        required: true
    },
    secondaryColor: {
        type: RgbaColorSchema,
        required: true
    },
    dividerColor: {
        type: RgbaColorSchema,
        required: true
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `UserWebClientPreferences.themes` property.
 */
const UserWebClientPreferencesThemesSchema = new Schema({
    light: {
        type: UserWebClientThemeSchema
    },
    dark: {
        type: UserWebClientThemeSchema
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `UserWebClientPreferences` type.
 */
const UserWebClientPreferencesSchema = new Schema({
    themes: {
        type: UserWebClientPreferencesThemesSchema,
        required: true,
        default: {}
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `UserPreferences` type.
 */
export const UserPreferencesSchema = new Schema({
    // TODO Add global preferences
    webClient: {
        type: UserWebClientPreferencesSchema,
        required: true,
        default: {}
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});