import { BIND_RAWDATA,SORT_BY_COL,SET_COL_LIST } from './actions'
import { combineReducers } from 'redux'

function sortBy(state=null,action){
	switch(action.type){
		case SORT_BY_COL:
			return (a,b)=>a[action.col]-b[action.col];
		default:
			return state
	}
}

function rawData(state=[],action){
	switch(action.type){
		case BIND_RAWDATA:
			return action.rawData;
		default:
			return state
	}
}

function colList(state=[],action){
	switch(action.type){
		case SET_COL_LIST :
			return action.colList;
		default:
			return state
	}
}

const tableApp = combineReducers({
	rawData,
	colList,
	sortBy
})

export default tableApp;