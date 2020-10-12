import { connect } from 'react-redux'
import { setUsername, setDeviceToken, setAWS } from '../../action'
import ConnectPage from './ConnectPage'

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => {
      console.log(username)
      dispatch(setUsername(username))
    },
    setDeviceToken: (deviceToken) => {
      console.log(deviceToken)
      dispatch(setDeviceToken(deviceToken))
    },
    setAWS: (aws) => {
      console.log(aws)
      dispatch(setAWS(aws))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ConnectPage)