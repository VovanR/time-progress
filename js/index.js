import MinuteItem from './item/minute-item.js'
import HourItem from './item/hour-item.js'
import DayItem from './item/day-item.js'
import WeekItem from './item/week-item.js'
import MonthItem from './item/month-item.js'
import YearItem from './item/year-item.js'
import TimeInterval from './time-interval.js'

const appRootElement = document.querySelector('#app')

const items = [
  new MinuteItem(),
  new HourItem(),
  new DayItem(),
  new WeekItem(),
  new MonthItem(),
  new YearItem(),
]

initItems()

const interval = new TimeInterval({
  delay: 50,
  onTick: () => {
    updateItems()
  }
})
interval.start()

function initItems() {
  const currentDate = new Date()
  items.forEach(item => item.init().appendTo(appRootElement).setCurrentDate(currentDate).update())
}

function updateItems() {
  const currentDate = new Date()
  items.forEach(item => item.setCurrentDate(currentDate).update())
}
