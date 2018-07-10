import React, {Component} from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import {sglogo, user, barcode} from '../images'

class IdCard extends Component {
	state = {
		user: {
			name: "Raja Thavalam",
			id: 'N05441',
			bloodgroup: 'A+'
		}
	}
	render() {
		const {
			scrollViewStyle,
			idCardStyle,
			cardViewStyle,
			detailsStyle,
			barcodeStyle
		} = styles
		return(
			<ScrollView style={scrollViewStyle}>
				<View style={idCardStyle}>
					<View style={cardViewStyle}>
						<Image source={user} />
						<Text style={[detailsStyle, {fontSize:18}]}>{this.state.user.name}</Text>
						<Text style={[detailsStyle, {fontSize:12}]} >ASSOCIATE ID: {this.state.user.id}</Text>
						<Text style={[detailsStyle, {fontSize:12}]} >BLOOD GROUP: {this.state.user.bloodgroup}</Text>
						<Image style={barcodeStyle} source={barcode} />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	scrollViewStyle: {
		padding: 10,
		paddingRight: 20,
		paddingLeft: 20,
		backgroundColor: '#fff'
	},
	idCardStyle: {
		borderWidth: 1,
		marginBottom: 40,
	},
	cardViewStyle: {
		alignItems: 'center',
		padding: 10,
		borderBottomWidth: 1
	},
	detailsStyle: {
		fontWeight: 'bold',
		color: '#000'
	},
	barcodeStyle: {
		width: 150,
		height: 50
	}
}

export { IdCard }