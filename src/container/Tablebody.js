import { connect } from 'react-redux'
import * as components from '../component/Table.jsx'

const mapStateToProps = state => {
	return {
		data : state.rawData.sort(state.sortBy).map((t)=>state.colList.map((c)=>t[c]))
	}
}
const Tablebody = connect(mapStateToProps)(components.Tablebody)
export default Tablebody;
