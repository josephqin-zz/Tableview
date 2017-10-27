import React from 'react'
import Tablebody from './Tablebody'
import Tabletitle from './Tabletitle'

// export default function Table(props){
// 	let heightStep = props.height/(props.entriesNum+1);
    
// 	return (
// 		<svg width={props.width} height={props.height} >
// 			<Row data={props.data.cols} height={heightStep} width={props.width} x={0} y={heightStep*0.5} bgColor={titleColor}/>
// 			<Tablebody data={props.data.rows} height={heightStep} width={props.width} x={0} y={ heightStep*1 } entriesNum={props.entriesNum} />
// 		</svg>
// 	)

// }
const titleColor = '#ffffff';

const Table = function(props){
	let heightStep = props.height/(props.entriesNum+1);
	return (
		<svg width={props.width} height={props.height}>
			<Tabletitle height={heightStep} width={props.width} x={0} y={heightStep*0.5} bgColor={titleColor}/>
			<Tablebody height={heightStep} width={props.width} x={0} y={ heightStep*1 } entriesNum={props.entriesNum} />
		</svg>
	)
}

export default Table;