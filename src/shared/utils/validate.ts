import { StrengthType } from '../../Components/PasswordTestForm/PasswordTestForm'
import {
  DIGITS_LETTERS_SYMBOLS,
  DIGITS_SYMBOLS,
  LETTERS_AND_DIGITS,
  LETTERS_AND_SYMBOLS,
  ONLY_DIGITS,
  ONLY_LETTERS,
  ONLY_SYMBOLS
} from '../consts/Consts'

let passwordStrength: StrengthType
export const validate = (inputVal: string): StrengthType => {
  if (inputVal.trim().length === 0) {
    passwordStrength = StrengthType.Empty
  } else if (inputVal.trim().length >= 8) {
    if (
      inputVal.match(ONLY_LETTERS) ||
      inputVal.match(ONLY_DIGITS) ||
      inputVal.match(ONLY_SYMBOLS)
    ) {
      passwordStrength = StrengthType.Easy
    }
    if (
      inputVal.match(LETTERS_AND_DIGITS) ||
      inputVal.match(LETTERS_AND_SYMBOLS) ||
      inputVal.match(DIGITS_SYMBOLS)
    ) {
      passwordStrength = StrengthType.Medium
    }
    if (inputVal.match(DIGITS_LETTERS_SYMBOLS)) {
      passwordStrength = StrengthType.Strong
    }
  } else passwordStrength = StrengthType.Error

  return passwordStrength
}
