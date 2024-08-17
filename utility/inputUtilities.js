export function sanitizeString(input) {
    // Remove any characters that are not alphanumeric, spaces, or common punctuation
    return input.replace(/[^a-zA-Z0-9 .,!?-]/g, '');
}

export function isInvalidDescription(description) {
    return (!description || description.length < 5 || description.length > 100);
}