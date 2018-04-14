import PickNavChoice from './index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectHalf} from './actions'

const mapStateToProps = (state) => {
  return {selectedHalf: state.selectedHalf}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators({selectHalf}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(PickNavChoice)
