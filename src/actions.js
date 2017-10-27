export const SORT_BY_COL = 'SORT_BY_COL';
export const BIND_RAWDATA = 'BIND_RAWDATA';
export const SET_COL_LIST = 'SET_COL_LIST';

export function setColList(colList){
	return {type:SET_COL_LIST,colList}
}

export function bindRawData(rawData){
	return {type:BIND_RAWDATA,rawData}
}

export function sortByCol(col){
	return {type:SORT_BY_COL,col}
}

