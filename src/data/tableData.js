const generateRandomValue = (baseValue, variance = 0.1) => {
  const min = baseValue * (1 - variance)
  const max = baseValue * (1 + variance)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateDailyData = () => {
  const baseData = [
    {
      metric: 'revenue',
      indicator: 'Выручка, руб',
      baseValue: 500000,
      currentDay: '500 521',
      yesterday: {
        value: '480 521',
        change: '+4%',
        changeType: 'positive'
      },
      thisDayOfWeek: '4 805 121'
    },
    {
      metric: 'cash',
      indicator: 'Наличные',
      baseValue: 300000,
      currentDay: '300 000',
      yesterday: {
        value: '300 000',
        change: '0%',
        changeType: 'neutral'
      },
      thisDayOfWeek: '300 000'
    },
    {
      metric: 'noncash',
      indicator: 'Безналичный расчет',
      baseValue: 100000,
      currentDay: '100 000',
      yesterday: {
        value: '100 000',
        change: '0%',
        changeType: 'neutral'
      },
      thisDayOfWeek: '100 000'
    },
    {
      metric: 'credit',
      indicator: 'Кредитные карты',
      baseValue: 100000,
      currentDay: '100 521',
      yesterday: {
        value: '100 521',
        change: '0%',
        changeType: 'neutral'
      },
      thisDayOfWeek: '100 521'
    },
    {
      metric: 'avg-check',
      indicator: 'Средний чек, руб',
      baseValue: 1300,
      currentDay: '1 300',
      yesterday: {
        value: '900',
        change: '+44%',
        changeType: 'positive'
      },
      thisDayOfWeek: '900'
    },
    {
      metric: 'avg-guest',
      indicator: 'Средний гость, руб',
      baseValue: 1200,
      currentDay: '1 200',
      yesterday: {
        value: '800',
        change: '+50%',
        changeType: 'positive'
      },
      thisDayOfWeek: '800'
    },
    {
      metric: 'removals-after',
      indicator: 'Удаления из чека (после оплаты), руб',
      baseValue: 1000,
      currentDay: '1 000',
      yesterday: {
        value: '1 100',
        change: '-9%',
        changeType: 'negative'
      },
      thisDayOfWeek: '900'
    },
    {
      metric: 'removals-before',
      indicator: 'Удаления из чека (до оплаты), руб',
      baseValue: 1300,
      currentDay: '1 300',
      yesterday: {
        value: '1 300',
        change: '0%',
        changeType: 'neutral'
      },
      thisDayOfWeek: '900'
    },
    {
      metric: 'checks-count',
      indicator: 'Количество чеков',
      baseValue: 34,
      currentDay: '34',
      yesterday: {
        value: '36',
        change: '-6%',
        changeType: 'negative'
      },
      thisDayOfWeek: '34'
    },
    {
      metric: 'guests-count',
      indicator: 'Количество гостей',
      baseValue: 34,
      currentDay: '34',
      yesterday: {
        value: '36',
        change: '-6%',
        changeType: 'negative'
      },
      thisDayOfWeek: '32'
    }
  ]

  return baseData.map(item => {
    const newValue = generateRandomValue(item.baseValue)
    const yesterdayValue = generateRandomValue(item.baseValue * 0.95)
    const weekDayValue = generateRandomValue(item.baseValue * 0.9)
    const change = newValue - yesterdayValue
    const changePercent = Math.round((change / yesterdayValue) * 100)
    
    let changeType = 'neutral'
    let changeText = '0%'
    
    if (changePercent > 0) {
      changeType = 'positive'
      changeText = `+${changePercent}%`
    } else if (changePercent < 0) {
      changeType = 'negative'
      changeText = `${changePercent}%`
    }

    return {
      ...item,
      currentDay: newValue.toLocaleString('ru-RU'),
      yesterday: {
        value: yesterdayValue.toLocaleString('ru-RU'),
        change: changeText,
        changeType: changeType
      },
      thisDayOfWeek: weekDayValue.toLocaleString('ru-RU')
    }
  })
}

export const tableData = generateDailyData()
