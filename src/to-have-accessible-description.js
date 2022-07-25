import {assertElementHasDescription} from 'dom-assertions'
import {
  checkHtmlElement,
  getMessage,
  resolvePartialMatchingValue,
} from './utils'

export function toHaveAccessibleDescription(
  htmlElement,
  expectedAccessibleDescription,
) {
  checkHtmlElement(htmlElement, toHaveAccessibleDescription, this)

  const {pass, received} = assertElementHasDescription(
    htmlElement,
    resolvePartialMatchingValue(expectedAccessibleDescription),
  )

  return {
    pass,

    message: () => {
      const to = this.isNot ? 'not to' : 'to'
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.${toHaveAccessibleDescription.name}`,
          'element',
          '',
        ),
        `Expected element ${to} have accessible description`,
        expectedAccessibleDescription,
        'Received',
        received,
      )
    },
  }
}
