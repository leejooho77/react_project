import React, { Component } from 'react';
import $ from 'jquery';

class Stadium extends Component {
	constructor() {
		super();
		this.state = {
			stadium: []
		};
	}

	componentDidMount() {
		$.getJSON('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json', (parsedData)=> {
			console.log(parsedData);
			this.setState(
				this.state = {
					stadium: parsedData.stadiums
				}
			)
		})
	}

	render() {
		const stadium_images = this.state.stadium.map((data, index)=>{
			console.log(data.image);
			return (
				<p>`{data.name}`, `{data.city}`, `{data.image}`</p>
			)
		});

		return (
			<div>
				{stadium_images}
			</div>
		)
	}
}

export default Stadium;