import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';

class Profile extends Component {
	state = {
		user: {
			name: "Raja Thavalam",
			id: 'N05441',
			bloodgroup: 'A+',
			email: 'raja.thavalam@senecaglobal.com',
			phone: '+919885994588',
			gender: 'Male'
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
					<View style={contentViewStyle}>
						<Text style={headingStyle}>Name</Text>
						<Text style={contentStyle}>{this.state.user.name} </Text>
					</View>
					<View style={contentViewStyle}>
						<Text style={headingStyle}>E-mail</Text>
						<Text style={contentStyle}>{this.state.user.email} </Text>
					</View>
					<View style={contentViewStyle}>
						<Text style={headingStyle}>Mobile</Text>
						<Text style={contentStyle}>{this.state.user.phone} </Text>
					</View>
					<View style={contentViewStyle}>
						<Text style={headingStyle}>Gender</Text>
						<Text style={contentStyle}>{this.state.user.gender} </Text>
					</View>
					<View style={contentViewStyle}>
						<Text style={headingStyle}>Blood Group</Text>
						<Text style={contentStyle}>{this.state.user.bloodgroup} </Text>
					</View>
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
		padding: 10,
		flex: 1,
		marginTop: 40,
		borderWidth: 1,
		borderColor: '#ddd',
		marginBottom: 40
	},
	contentViewStyle: {
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		padding: 10
	},
	headingStyle: {
		color: 'grey',
		fontSize: 15
	},
	contentStyle: {
		color: '#000',
		fontSize: 20
	}
}
export { Profile }