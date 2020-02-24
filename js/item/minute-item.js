import BaseItem from './base-item.js'

class MinuteItem extends BaseItem {
  constructor() {
    super()

    this.name = 'minute'
  }

  getStartDate() {
    const startDate = this.cloneCurrentDate()
    startDate.setSeconds(0, 0)

    return startDate
  }

  getEndDate() {
    const endDate = this.cloneCurrentDate()
    endDate.setMinutes(endDate.getMinutes() + 1, 0, 0)
    endDate.setMilliseconds(-1)

    return endDate
  }

  getValueOutputValue() {
    return this.currentDate.getMinutes()
  }

  // TODO
  getValueOutputLabel() {
    const value = this.currentDate.getSeconds()

    return `${value}/60`
  }

  getMaxValueOutputValue() {
    return 60
  }
}

export default MinuteItem
