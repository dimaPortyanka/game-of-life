import curry from 'lodash/curry'
import get from 'lodash/get'

function countNeighbors(matrix, y, x) {
  let amount = 0
  for(let yDiff = -1; yDiff < 2; yDiff += 1) {
    for(let xDiff = -1; xDiff < 2; xDiff += 1) {
      if (get(matrix, `[${y + yDiff}][${x + xDiff}]`, false)) {
        amount += 1
      }
    }
  }

  return amount
}

function next(matrix) {
  const rowsAmount = matrix.length
  const colsAmount = matrix[0].length

  const res = []

  for (let y = 0; y < rowsAmount; y += 1) {
    const row = []
    for (let x = 0; x < colsAmount; x += 1) {
      const curValue = matrix[y][x]
      const neighborsAmount = countNeighbors(matrix, y, x)

      let val = false

      if(neighborsAmount === 3) {
        val = true
      }

      row.push(val)
    }

    res.push(row)
  }

  return res
}

export default next
