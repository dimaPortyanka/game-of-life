import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Field.css'

const propTypes = {
  restart: PropTypes.func.isRequired,
  lifeMatrix: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.bool.isRequired,
    ).isRequired,
  ).isRequired,
}

const Field = ({ lifeMatrix, restart }) => (
  <div onClick={restart}>
    {lifeMatrix.map((row, rowIndex) => (
      <div className="flex" key={`field-row-${rowIndex}`}>
        {row.map((val, colIndex) => (
          <div
            className={classnames('cell', { selected: val })}
            key={`field-cell-${rowIndex}-${colIndex}`}
          />
        ))}
      </div>
    ))}
  </div>
)
Field.propTypes = propTypes

export default Field
