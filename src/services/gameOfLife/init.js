function init(width = 50, height = 50) {
  const res = []

  for (let i = 0; i < height; i++) {
    const row = []
    for (let j = 0; j < width; j++) {
      row.push(!!Math.round(Math.random(1)))
    }

    res.push(row)
  }

  return res
}

export default init
