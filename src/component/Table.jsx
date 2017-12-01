import React from 'react'
import * as utility from '../utility'

const textStyle = {textAnchor:'middle',dominantBaseline:'middle',fill:'#000000'};
const fontSize = (text,width) => Math.min(Math.floor(width/text.length)*1.8,16)
const rowColor = (i)=>i%2?"#ffffff":'#e0e2e5';


export class Cell extends React.Component{
    
    componentDidMount() {
        this.tCell.addEventListener('click', this.props.onClick );
       
    }

    componentWillUnmount(){
        this.tCell.removeEventListener('click', this.props.onClick );
        
    }


    render(){
	    let attrs = {d:utility.drawRect(this.props.width,this.props.height),fill:this.props.bgColor,stroke:'none'}
	    let textstyle = (this.props.text && this.props.text.length > 0)?{...textStyle,fontSize:fontSize(this.props.text,this.props.width)}:textStyle;
		return (
			<g ref={ ref=>this.tCell=ref } transform={utility.tranSlate(this.props.x,this.props.y)}>
			 	<path {...attrs}/>
			 	<text style={textstyle}>{ this.props.text }</text> 	
			</g>
		)
	}
}


export function Row(props){
	let widthStep = props.width/props.data.length;

	return (
		<g transform={utility.tranSlate(props.x,props.y)}>
		{ props.data.map((d,index)=>(<Cell key={index} text={d} height={props.height} width={widthStep} x={ (index+0.5)*widthStep } y={0} bgColor = {props.bgColor} onClick={ (props.onClick)?()=>props.onClick(d):null }/>)) } 
		</g>
		)
}

export class Tablebody extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {filter:utility.createArray(this.props.entriesNum)}
    }

    componentDidMount() {
        this.tBody.addEventListener('mousewheel', this.scrollingHandler.bind(this));
       
    }

    componentWillUnmount(){
        this.tBody.removeEventListener('mousewheel', this.scrollingHandler.bind(this));
        
    }

    scrollingHandler(e){
		
    	e.preventDefault();

    	let step = e.deltaY>0?1:-1;
    	this.setState(prevState=>({
    		filter:utility.pagination(prevState.filter,this.props.data.length,step)
    	}))
    }
    


    //props.height: means each row height which is decided by root component already
    
	render(){
		const rows = this.props.data.filter((d,i)=>this.state.filter.includes(i));

		return (
		<g ref={ ref=>this.tBody=ref } transform={utility.tranSlate(this.props.x,this.props.y)}>
			{ rows.map((d,index)=><Row key={index} data={d} height={this.props.height} width={this.props.width} x={0} y={ (index+0.5)*this.props.height } bgColor={rowColor(index)} onClick={null} />)}
		</g>
		)
    }
}

