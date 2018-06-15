import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mysql from 'mysql';

class Group extends Component {
	constructor() {
		super();
		this.state = {
			teams: []
		};
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
			<div className="col-sm-3">
				<table className="table table-hover">
					<thead>
						<tr>
							<th className="text-center">Group</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><Link to="#" className="team">Example 1</Link></td>
						</tr>
						<tr>
							<td><Link to="#" className="team">Example 2</Link></td>
						</tr>
						<tr>
							<td><Link to="#" className="team">Example 3</Link></td>
						</tr>
						<tr>
							<td><Link to="#" className="team">Example 4</Link></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Group;