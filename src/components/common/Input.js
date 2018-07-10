import React from 'react';
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const {inputStyle, labelStyle, containerStyle} = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				underlineColorAndroid='transparent'
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: "#ddd",
		height: 40
	},
	labelStyle: {
		fontSize: 18,
		paddingBottom: 10,
		color: '#000'
	},
	containerStyle: {
		height: 80,
		flex: 1,
	}
};

export { Input };