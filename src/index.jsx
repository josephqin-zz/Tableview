import React from 'react'
import { render } from 'react-dom'
import Table from './component/Table.jsx'

var width = 1000,
	height = 500,
	dataset = new Array;

var renderModule = function(nodeID){

render(
	<Table data={dataset} width={width} height={height}/>,
	document.getElementById(nodeID)
	)

}

renderModule.bindData = function(data){
	if(!arguments.length) return dataset;
	dataset = [...data];
	return this;
}


renderModule.setHeight = function(data){
	if(!arguments.length) return height;
	height = data;
	return this;
}

renderModule.setWidth = function(data){
	if(!arguments.length) return dataset;
	width = data;
	return this;
}

module.exports = renderModule