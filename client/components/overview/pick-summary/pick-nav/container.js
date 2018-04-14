import PickNav from './index'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {selectedHalf: state.selectedHalf}
}

export default connect(mapStateToProps)(PickNav)
