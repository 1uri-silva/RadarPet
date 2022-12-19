import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type PropsTouchable = TouchableOpacityProps & {
	title: string;
};

const Touchable: React.FC<PropsTouchable> = ({ title, ...rest }) => {
	return (
		<TouchableOpacity style={styles.buttonNewPet} {...rest}>
			<Text style={styles.textNewPet}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonNewPet: {
		height: 60,
		bottom: 20,
		width: '90%',
		marginTop: 17,
		marginLeft: 17,
		borderRadius: 5,
		position: 'absolute',
		backgroundColor: 'green',
		justifyContent: 'center',
	},
	textNewPet: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		fontWeight: '600',
	},
});

export { Touchable };
