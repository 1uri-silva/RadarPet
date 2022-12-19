import {
	View,
	TextInput,
	TextInputProps,
	StyleSheet,
	Text,
} from 'react-native';

type PropsInput = TextInputProps & {
	label: string;
};

const Input: React.FC<PropsInput> = ({ label, ...rest }) => {
	return (
		<View style={styles.content}>
			<Text style={styles.textLabel}>{label}</Text>
			<TextInput placeholder={label} style={styles.inputPetName} {...rest} />
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		width: '100%',
		justifyContent: 'center',
		padding: 10,
	},
	textLabel: {
		fontSize: 15,
		marginBottom: 7,
		fontWeight: '400',
	},
	inputPetName: {
		padding: 8,
		borderRadius: 7,
		borderColor: 'gray',
		borderWidth: 0.7,
		fontWeight: '500',
		fontSize: 14,
	},
});
export { Input };
