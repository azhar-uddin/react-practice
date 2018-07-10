import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CardSection } from './common';

class Health extends Component {
	state = {
		details: {
			company: "ICICI Lombard Health Care",
			policyNumber: '4016/1304164445645645/00/554',
			cardNumber: 'IL00215648641454351',
			empId: 'N0441',
			validFrom: '17 May 2018 - 16th May 2019',
			contact: '1800 26666',
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
						heading="Insurance Company"
						content={this.state.details.company}
					/>
					<CardSection 
						heading="Policy Number"
						content={this.state.details.policyNumber}
					/>
					<CardSection 
						heading="Card Number"
						content={this.state.details.cardNumber}
					/>
					<CardSection 
						heading="Employee ID"
						content={this.state.details.empId}
					/>
					<CardSection 
						heading="Valid From"
						content={this.state.details.validFrom}
					/>
					<CardSection 
						heading="Insurance Company Contact Number"
						content={this.state.details.contact}
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
export { Health }