import { connect } from 'react-redux'
import { sortByCol } from '../actions' 
import * as components from '../component/Table.jsx'

const mapStateToProps = state => {
	return {
		data:state.colList
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick : col => { dispatch(sortByCol(col)) }
	}
}

const Tabletitle = connect(mapStateToProps,mapDispatchToProps)(components.Row)

export default Tabletitle 