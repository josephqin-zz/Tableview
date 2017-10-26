import React from 'react'
import * as utility from './utility'

const textStyle = {textAnchor:'middle',dominantBaseline:'middle',fill:'#000000'};
const fontSize = (text,width) => Math.min(Math.floor(width/text.length)*1.5,16)
const rowColor = (i)=>{return i%2?"#ffffff":'#e0e2e5'};

function Cell(props){
    
    let attrs = {d:utility.drawRect(props.width,props.height),fill:props.bgColor,stroke:'none'}
    let textstyle = {...textStyle,fontSize:fontSize(props.text,props.width)}
	return (
		<g transform={utility.tranSlate(props.x,props.y)}>
		 	<path {...attrs}/>
		 	<text style={textstyle}>{ props.text }</text> 	
		</g>
	)
}


function Row(props){
	let widthStep = props.width/props.data.length;

	return (
		<g transform={utility.tranSlate(props.x,props.y)}>
		{ props.data.map((d,index)=>(<Cell key={index} text={d} height={props.height} width={widthStep} x={ (index+0.5)*widthStep } y={0} bgColor = {props.bgColor} />)) } 
		</g>
		)
}

function Tablecontent(props){
    let heightStep = props.height/props.data.length;
    
	return (
		<svg width={props.width} height={props.height} >
			{ props.data.map((d,index)=><Row key={index} data={d} height={heightStep} width={props.width} x={0} y={ (index+0.5)*heightStep } bgColor={rowColor(index)} />)}
		</svg>
		)
}

export default function Table(props){
	return (
		
		)

}