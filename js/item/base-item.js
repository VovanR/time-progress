import {createElement} from '../utils.js'

class BaseItem {
  constructor() {
    this.name = null

    this.currentDate = null

    this.labelElement = null
    this.valueOutputElement = null
    this.maxValueOutElement = null
    this.valuePercentElement = null
    this.meterElement = null
    this.meterElement = null
    this.meterContainerElement = null
  }

  init() {
    this.buildElements()

    return this
  }

  buildElements() {
    this.labelElement = this.buildLabelElement()
    this.valueOutputElement = this.buildValueOutputElement()
    this.valueOutputLabelElement = this.buildValueOutputLabelElement()
    this.maxValueOutElement = this.buildMaxValueOutputElement()
    this.valuePercentElement = this.buildValuePercentElement()
    this.meterElement = this.buildMeterElement()
    this.meterContainerElement = this.buildMeterContainerElement()
  }

  appendTo(element) {
    element.append(this.labelElement)
    element.append(this.valueOutputElement)
    element.append(this.maxValueOutElement)
    element.append(this.valuePercentElement)
    this.meterContainerElement.append(this.valueOutputLabelElement)
    this.meterContainerElement.append(this.meterElement)
    element.append(this.meterContainerElement)

    return this
  }

  buildLabelElement() {
    return createElement({
      type: 'label',
      attributes: {
        for: this.name,
      },
      text: this.name,
    })
  }

  buildValueOutputElement() {
    return createElement({
      type: 'output',
      className: 'value-output',
    })
  }

  buildValueOutputLabelElement() {
    const label = this.getValueOutputLabel()

    return createElement({
      type: 'output',
      className: 'value-meter-label',
      text: label,
    })
  }

  buildMaxValueOutputElement() {
    return createElement({
      type: 'output',
      className: 'max-value-output',
    })
  }

  buildValuePercentElement() {
    return createElement({
      type: 'output',
      className: 'value-percent',
    })
  }

  /*
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter}
   */
  buildMeterElement() {
    return createElement({
      className: 'value-meter',
      type: 'meter',
      attributes: {
        id: this.name,
        name: this.name,
      }
    })
  }

  buildMeterContainerElement() {
    return createElement({
      className: 'value-meter-container',
    })
  }

  setCurrentDate(currentDate) {
    this.currentDate = currentDate

    return this
  }

  cloneCurrentDate() {
    return new Date(this.currentDate)
  }

  getStartDate() {
    throw new Error('Not implemented')
  }

  getEndDate() {
    throw new Error('Not implemented')
  }

  getValueOutputValue() {
    throw new Error('Not implemented')
  }

  getValueOutputLabel() {
    return null
  }

  getMaxValueOutputValue() {
    throw new Error('Not implemented')
  }

  getInfo() {
    const startDate = this.getStartDate()
    const endDate = this.getEndDate()

    const value = this.currentDate.getTime()
    const min = startDate.getTime()
    const max = endDate.getTime()
    const valueOutput = this.getValueOutputValue()
    const valueOutputLabel = this.getValueOutputLabel()
    const maxValueOutput = this.getMaxValueOutputValue()
    const valuePercent = Math.floor((value - min) / (max - min) * 100)

    return {
      valueOutput,
      valueOutputLabel,
      maxValueOutput,
      valuePercent,
      value,
      min,
      max,
    }
  }

  update() {
    const {
      valueOutput,
      valueOutputLabel,
      maxValueOutput,
      valuePercent,
      value,
      min,
      max,
    } = this.getInfo()

    this.valueOutputElement.value = valueOutput

    if (maxValueOutput !== null) {
      this.maxValueOutElement.value = maxValueOutput
    }

    this.valuePercentElement.value = valuePercent

    const total = max - min

    this.meterElement.value = value
    this.meterElement.setAttribute('min', min)
    this.meterElement.setAttribute('max', max)
    this.meterElement.setAttribute('low', min + Math.floor(total * 0.33))
    this.meterElement.setAttribute('high', min + Math.floor(total * 0.66))
    this.meterElement.setAttribute('optimum', min + Math.floor(total * 0.8))

    if (valueOutputLabel !== null) {
      this.valueOutputLabelElement.value = valueOutputLabel
    }

    return this
  }
}

export default BaseItem
