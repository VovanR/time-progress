import BaseItem from './base-item.js'

class YearItem extends BaseItem {
  constructor() {
    super()

    this.name = 'year'
  }

  getStartDate() {
    const startDate = this.cloneCurrentDate()
    startDate.setMonth(0, 1)
    startDate.setHours(0, 0, 0, 0)

    return startDate
  }

  getEndDate() {
    const endDate = this.cloneCurrentDate()
    endDate.setFullYear(endDate.getFullYear() + 1)
    endDate.setMonth(0, 1)
    endDate.setHours(0, 0, 0, 0)
    endDate.setMilliseconds(-1)

    return endDate
  }

  getValueOutputValue() {
    return this.currentDate.getFullYear()
  }

  getMaxValueOutputValue() {
    return ''
  }
}

export default YearItem
