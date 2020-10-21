import { connect } from 'react-redux'
import { setSearchKeyword, setSearchResult, setItemID } from '../../action'
import Barcode from './Barcode'

const mapStateToProps = (state) => {
  return {
    ...state.search,
    deviceToken: state.deviceToken,
    userToken: state.userToken    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchKeyword: (keyword) => {
      console.log(keyword)
      dispatch(setSearchKeyword(keyword))
    },
    setSearchResult: (result) => {
      console.log(result)
      dispatch(setSearchResult(result))
    },
    setItemID: (id) => {
      console.log(id)
      dispatch(setItemID(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barcode)
