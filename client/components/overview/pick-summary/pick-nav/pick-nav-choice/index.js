import PropTypes from 'prop-types'
import React from 'react'

const PickNavChoice = ({actions, halfId, selectedHalf}) => {
  // NOTE: Come up w/ a cleaner way to map the ID and the label
  const halfLabel = halfId === 'half1' ?
    'First half' :
    'Second half'
  const navLinkClass = halfId === selectedHalf ?
    'nav-item nav-link active' :
    'nav-item nav-link'

  return (
    <li
      className={navLinkClass}
      onClick={() => {
        actions.selectHalf(halfId)
      }}
    >
      {halfLabel}
    </li>
  )
}

PickNavChoice.propTypes = {
  actions: PropTypes.shape({selectHalf: PropTypes.func.isRequired}).isRequired,
  halfId: PropTypes.string.isRequired,
  selectedHalf: PropTypes.string.isRequired
}

export default PickNavChoice
