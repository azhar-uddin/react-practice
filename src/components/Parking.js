import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CardSection } from './common';

class Parking extends Component {
	state = {
		user: {
			lotNumber: "P 26",
			vehicle: 'Maruti Swift TS01 KK 2565',
			dueDate: '12 June 2019'
		}
	}
	render() {
		const {
			scrollViewStyle,
			viewStyle,
			contentViewStyle,
			headingStyle,
			contentStyle
		} = styles
		return(
			<ScrollView style={scrollViewStyle}>
				<View style={viewStyle}>
					<CardSection 
						heading="Lot Number"
						content={this.state.user.lotNumber}
					/>
					<CardSection 
						heading="Vehicle"
						content={this.state.user.vehicle}
					/>
					<CardSection 
						heading="Parking Charges Due Date"
						content={this.state.user.dueDate}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	scrollViewStyle: {
		backgroundColor: '#fff',
		flex: 1
	},
	viewStyle: {
		marginTop: 20,
		padding: 20,
		flex: 1,
		marginBottom: 40
	}
}
export { Parking }