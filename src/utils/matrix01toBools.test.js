import matrix01Bools from './matrix01toBools'

describe('matrix01Bools', () => {
  it('change 0 and 1 to bools', () => {
    expect(matrix01Bools([
      [1,1,1],
      [0,1,0],
      [1,0,0],
    ])).toEqual([
      [true, true, true],
      [false, true, false],
      [true, false, false],
    ])
  })
})
