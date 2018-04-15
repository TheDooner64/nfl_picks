import {Field, reduxForm} from 'redux-form'
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

// PureComponent will only update the prop it receives has a change
class Pick extends PureComponent {

  constructor () {
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (event) {
    const teamCode = event.target.value
    const {actions, fullPickId, pick} = this.props
    pick.teamCode = teamCode

    // TODO: Figure out a cleaner way to update the pick w/o having to recreate an object w/ fullPickId
    actions.selectTeam(
      {
        fullPickId,
        pick
      }
    )
  }

  // Add a ref to this field so we don't need to override the handleOnChange
  render () {
    const {fullPickId, myAvailableTeams} = this.props

    return (
      <div className={`${styles.pick}`}>
        <Field
          className="form-control"
          component="select"
          name={fullPickId}
          onChange={this.handleOnChange}
          type="text"
        >
          <option label="--" value="" />
          {
            Object.keys(myAvailableTeams).map((teamCode) => {
              // Use an if condition to add "selected" to the option that's currently selected
              return (
                <option key={teamCode} label={teamCode} value={teamCode} />
              )
            })
          }
        </Field>
      </div>
    )
  }

}

Pick.propTypes = {
  actions: PropTypes.shape({selectTeam: PropTypes.func.isRequired}).isRequired,
  fullPickId: PropTypes.string.isRequired,
  myAvailableTeams: PropTypes.shape().isRequired,
  pick: PropTypes.shape().isRequired
}

// I'm not passing any form config here, because I am dynamically setting it to fullPickId in the container
export default reduxForm()(Pick)
