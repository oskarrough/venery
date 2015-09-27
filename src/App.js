import React, { Component } from 'react';
import uniq from 'lodash/array/uniq';

// Store
const database = require('./database.json').data;
const verns = database;
const animals = uniq(database.map((item) => item.animal));
const nouns = uniq(database.map((item) => item.noun));

class ListItemWrapper extends Component {
	render() {
		return <li>{this.props.data}</li>;
	}
};

class List extends Component {
	render() {
		return (
			<ul>
				{this.props.items.map((item) => {
					return <ListItemWrapper key={item.id} data={item}/>;
				})}
			</ul>
		);
	}
};

export class App extends Component {
	render() {
		return (
			<div className="Flex">
				<div className="Flex-item">
					<h3>{verns.length} verns</h3>
					<List items={verns} />
				</div>
				<div className="Flex-item">
					<h3>{animals.length} animals</h3>
					<List items={animals} />
				</div>
				<div className="Flex-item">
					<h3>{nouns.length} nouns</h3>
					<List items={nouns} />
				</div>
			</div>
		);
	}
}
