import {assertElementIsInvalid, assertElementIsValid} from 'dom-assertions'

export function toBeInvalid(element) {
  const isInvalid = assertElementIsInvalid(element).pass

  return {
    pass: isInvalid,
    message: () => {
      const is = isInvalid ? 'is' : 'is not'
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInvalid`,
          'element',
          '',
        ),
        '',
        `Received element ${is} currently invalid:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

export function toBeValid(element) {
  const isValid = assertElementIsValid(element).pass

  return {
    pass: isValid,
    message: () => {
      const is = isValid ? 'is' : 'is not'
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeValid`,
          'element',
          '',
        ),
        '',
        `Received element ${is} currently valid:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}
