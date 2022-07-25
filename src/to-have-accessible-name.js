import {assertElementHasName} from 'dom-assertions'
import {getMessage, resolvePartialMatchingValue} from './utils'

export function toHaveAccessibleName(htmlElement, expectedAccessibleName) {
  const {pass, received} = assertElementHasName(
    htmlElement,
    resolvePartialMatchingValue(expectedAccessibleName),
  )

  return {
    pass,

    message: () => {
      const to = this.isNot ? 'not to' : 'to'
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.${toHaveAccessibleName.name}`,
          'element',
          '',
        ),
        `Expected element ${to} have accessible name`,
        expectedAccessibleName,
        'Received',
        received,
      )
    },
  }
}
