import BaseItem from './base-item.js'

class DayItem extends BaseItem {
  constructor() {
    super()

    this.name = 'day'
  }

  getStartDate() {
    const startDate = this.cloneCurrentDate()
    startDate.setHours(0, 0, 0, 0)

    return startDate
  }

  getEndDate() {
    const endDate = this.cloneCurrentDate()
    endDate.setDate(endDate.getDate() + 1)
    endDate.setHours(0, 0, 0, 0)
    endDate.setMilliseconds(-1)

    return endDate
  }

  getValueOutputValue() {
    return this.currentDate.getDate()
  }

  getMaxValueOutputValue() {
    const endDate = this.cloneCurrentDate()
    endDate.setMonth(endDate.getMonth() + 1, 1)
    endDate.setHours(0, 0, 0, 0)
    endDate.setMilliseconds(-1)

    return endDate.getDate()
  }
}

export default DayItem
