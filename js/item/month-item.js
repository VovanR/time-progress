import BaseItem from './base-item.js'

class MonthItem extends BaseItem {
  constructor() {
    super()

    this.name = 'month'
  }

  getStartDate() {
    const startDate = this.cloneCurrentDate()
    startDate.setDate(1)
    startDate.setHours(0, 0, 0, 0)

    return startDate
  }

  getEndDate() {
    const endDate = this.cloneCurrentDate()
    endDate.setMonth(endDate.getMonth() + 1, 1)
    endDate.setHours(0, 0, 0, 0)
    endDate.setMilliseconds(-1)

    return endDate
  }

  getValueOutputValue() {
    return this.currentDate.getMonth() + 1
  }

  getMaxValueOutputValue() {
    return 12
  }
}

export default MonthItem
