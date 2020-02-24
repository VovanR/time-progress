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

  getValueOutputLabel() {
    const now = this.currentDate
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
    const oneDay = 1000 * 60 * 60 * 24
    const day = Math.floor(diff / oneDay)
    const days = daysInYear(now)

    return `${day}/${days}`
  }

  getMaxValueOutputValue() {
    return ''
  }
}

/**
 * @param {Date} date
 * @returns {boolean}
 */
function isLeapYear(date) {
  const year = date.getFullYear()

  if ((year & 3) !== 0) {
    return false
  }

  return ((year % 100) !== 0 || (year % 400) === 0)
}

/**
 * @param {Date} date
 * @returns {number}
 */
function daysInYear(date) {
  if (isLeapYear(date)) {
    // Leap year
    return 366
  }

  return 365
}

export default YearItem
