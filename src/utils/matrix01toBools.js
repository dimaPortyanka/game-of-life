function matrix01toBools(matrix) {
  return matrix.map((row) => (
    row.map((val) => !!val)
  ))
}

export default matrix01toBools
