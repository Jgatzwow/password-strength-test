import { StrengthType } from '../PasswordTestForm'
import { validate } from '../../../shared/utils/validate'

test('Easy password strength should be set', () => {
  const initValue = 'asfasfaffsfas'

  const passwordStrength = validate(initValue)

  expect(passwordStrength).toBe(StrengthType.Easy)
})
test('Medium password strength should be set', () => {
  const initValue = 'asfasfaffsfas!@$!@$!@!$@'

  const passwordStrength = validate(initValue)

  expect(passwordStrength).toBe(StrengthType.Medium)
})
test('Strong password strength should be set', () => {
  const initValue = 'asfas124124!@$!@$!@'

  const passwordStrength = validate(initValue)

  expect(passwordStrength).toBe(StrengthType.Strong)
})
test('Error should be set', () => {
  const initValue = 'asfa'

  const passwordStrength = validate(initValue)

  expect(passwordStrength).toBe(StrengthType.Error)
})
