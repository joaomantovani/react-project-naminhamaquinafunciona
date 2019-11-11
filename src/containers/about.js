import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import About from '../pages/About'

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserName: data => alert(data),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(About)
)
