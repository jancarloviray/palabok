import timerDisplay from '../timer_display'

describe('timerDisplay', () => {
  test('works', () => {
    expect(timerDisplay(1000)).toEqual('0:01')
    expect(timerDisplay(60000)).toEqual('1:00')
    expect(timerDisplay(61000)).toEqual('1:01')
    expect(timerDisplay(71000)).toEqual('1:11')
  })
})