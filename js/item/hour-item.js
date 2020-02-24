import BaseItem from './base-item.js'

class HourItem extends BaseItem {
  constructor() {
    super()

    this.name = 'hour'
  }

  getStartDate() {
    const startDate = this.cloneCurrentDate()
    startDate.setMinutes(0, 0, 0)

    return startDate
  }

  getEndDate() {
    const endDate = this.cloneCurrentDate()
    endDate.setHours(endDate.getHours() + 1, 0, 0, 0)
    endDate.setMilliseconds(-1)

    return endDate
  }

  getValueOutputValue() {
    return this.currentDate.getHours()
  }

  getValueOutputLabel() {
    const value = this.currentDate.getMinutes()

    return `${value}/60`
  }

  getMaxValueOutputValue() {
    return 24
  }
}

export default HourItem
