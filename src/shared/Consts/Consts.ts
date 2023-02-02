export const ONLY_LETTERS = /^(?=.*[a-zA-Z])/
export const ONLY_DIGITS = /(?=.*[0-9])/
export const ONLY_SYMBOLS = /(?=.*[!@#\$%\^&\*\_])/

export const LETTERS_AND_DIGITS = /^(?=.*[a-zA-Z])(?=.*[0-9])/
export const LETTERS_AND_SYMBOLS = /^(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*\_])/
export const DIGITS_SYMBOLS = /(?=.*[0-9])(?=.*[!@#\$%\^&\*\_])/

export const DIGITS_LETTERS_SYMBOLS = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_])/