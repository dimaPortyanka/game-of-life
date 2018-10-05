import matrix01toBools from 'utils/matrix01toBools'

import next from './next'

describe('generate next step of the game of life', () => {
  it('die if no neighbors', () => {
    expect(next(matrix01toBools([
      [1,0],
      [0,0],
    ]))).toEqual(matrix01toBools([
      [0,0],
      [0,0],
    ]))
  })

  it('stay alive', () => {
    expect(next(matrix01toBools([
      [1,1],
      [0,1],
    ]))).toEqual(matrix01toBools([
      [1,1],
      [1,1],
    ]))
  })

  it('one stay alive', () => {
    expect(next(matrix01toBools([
      [0,0,0],
      [1,1,1],
      [0,0,0],
    ]))).toEqual(matrix01toBools([
      [0,1,0],
      [0,1,0],
      [0,1,0],
    ]))
  })

  it('one stay alive', () => {
    expect(next(matrix01toBools([
      [1,0,1],
      [0,1,0],
      [0,0,0],
    ]))).toEqual(matrix01toBools([
      [0,1,0],
      [0,1,0],
      [0,0,0],
    ]))
  })

  it('one born live', () => {
    expect(next(matrix01toBools([
      [0,1,0],
      [0,0,1],
      [0,1,0],
    ]))).toEqual(matrix01toBools([
      [0,0,0],
      [0,1,1],
      [0,0,0],
    ]))
  })

  it('all died', () => {
    expect(next(matrix01toBools([
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ]))).toEqual(matrix01toBools([
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ]))
  })
})
