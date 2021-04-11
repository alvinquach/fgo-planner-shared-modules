"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLinkSchema = void 0;
const mongoose_1 = require("mongoose");
/**
 * Mongoose schema for the `ExternalLink` type.
 */
exports.ExternalLinkSchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        // TODO Add validation
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
