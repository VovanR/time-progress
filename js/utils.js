/**
 * Create HTMLElement
 * {@link http://jsfiddle.net/VovanR/6bwnfxat/}
 * @version 1.1.1
 *
 * @param {string} [type='div']
 * @param {string} [className]
 * @param {string} [text]
 * @param {string} [html]
 * @param {Node[]|array[]} [children]
 * @param {object} [attributes]
 * @param {object} [dataset]
 * @returns {HTMLElement}
 *
 * @example
 * createElement()
 * createElement({type: 'span', text: 'Foo'})
 * createElement({type: 'ul', html: '<li>1</li><li>2</li><li>3</li>'})
 * createElement({children: [createElement({text: 'Bar'}), document.createElement('div')]})
 * createElement({attributes: {type: 'button'}})
 * createElement({dataset: {id: '1'}})
 */
function createElement({
  type = 'div',
  className,
  text,
  html,
  children,
  attributes,
  dataset,
} = {}) {
  const element = document.createElement(type)

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value)
    }
  }

  if (className) {
    element.setAttribute('class', className)
  }

  if (text !== undefined) {
    element.textContent = text
  } else if (html) {
    element.innerHTML = html
  } else if (children) {
    const appendChildElement = children => {
      children.forEach(childElement => {
        if (childElement instanceof Node) {
          element.append(childElement)
        } else if (Array.isArray(childElement)) {
          appendChildElement(childElement)
        }
      })
    }

    appendChildElement(children)
  }

  if (dataset) {
    for (const [key, value] of Object.entries(dataset)) {
      element.dataset[key] = value
    }
  }

  return element
}

export {
  createElement,
}
