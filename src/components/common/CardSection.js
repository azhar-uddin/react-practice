import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
	const { 
		contentViewStyle,
		contentStyle,
		headingStyle
	} = styles
	return(
		<View style={contentViewStyle}>
			<Text style={headingStyle}>{props.heading}</Text>
			<Text style={contentStyle}>{props.content} </Text>
		</View>
	);
}

const styles = {
	contentViewStyle: {
		padding: 10
	},
	headingStyle: {
		color: 'grey',
		fontSize: 18
	},
	contentStyle: {
		color: '#000',
		fontSize: 18
	}
}

export { CardSection };