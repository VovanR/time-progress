import BaseItem from './base-item.js'

class WeekItem extends BaseItem {
  constructor() {
    super()

    this.name = 'week'
  }

  getStartDate() {
    const startDate = this.cloneCurrentDate()
    const currentWeekDay = this.currentDate.getDay()
    const currentDay = this.currentDate.getDate()
    startDate.setDate(currentDay - currentWeekDay)
    startDate.setHours(0, 0, 0, 0)

    return startDate
  }

  getEndDate() {
    const endDate = this.cloneCurrentDate()
    const currentWeekDay = this.currentDate.getDay()
    const currentDay = this.currentDate.getDate()
    endDate.setDate(currentDay + (7 - currentWeekDay))
    endDate.setHours(0, 0, 0, 0)
    endDate.setMilliseconds(-1)

    return endDate
  }

  getValueOutputValue() {
    return this.currentDate.getDay() + 1
  }

  getMaxValueOutputValue() {
    return 7
  }
}

export default WeekItem
