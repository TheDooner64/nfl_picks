import {Field, reduxForm} from 'redux-form'
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styles from './styles.scss'

// PureComponent will only update the prop it receives has a change
class Pick extends PureComponent {

  constructor () {
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (event) {
    const teamCode = event.target.value
    const {actions, fullPickId} = this.props
    const pick = {
      fullPickId,
      teamCode
    }
    actions.selectTeam(pick)
  }

  // Add a ref to this field so we don't need to override the handleOnChange
  render () {
    const {availableTeams, fullPickId} = this.props

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
            _.map(availableTeams, (team) => {
              // Use an if condition to add "selected" to the option that's currently selected
              return (
                <option key={team.teamCode} label={team.teamCode} value={team.teamCode} />
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
  availableTeams: PropTypes.shape().isRequired,
  fullPickId: PropTypes.string.isRequired
}

// I'm not passing any form config here, because I am dynamically setting it to fullPickId in the container
export default reduxForm()(Pick)
