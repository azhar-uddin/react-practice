import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
	const { headerStyle, textStyle } = styles
	return(
		<View style={headerStyle}>
			<Text style={textStyle}>SenecaGlobal</Text>
		</View>
	);
}

const styles = {
	headerStyle: {
		padding: 10,
		backgroundColor: '#ff9800',
	},
	textStyle: {
		color: '#fff',
		fontSize: 18
	}
}

export default Header