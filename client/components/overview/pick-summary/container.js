import PickSummary from './index'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {selectedHalf: state.selectedHalf}
}

export default connect(mapStateToProps)(PickSummary)
