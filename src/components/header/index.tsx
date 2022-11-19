import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
	title: string;
	iconGoBack?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, iconGoBack = true }) => {
	const { goBack } = useNavigation();

	return (
		<View style={styles.container}>
			{iconGoBack ? (
				<TouchableOpacity onPress={goBack} style={styles.buttonGoBack}>
					<MaterialCommunityIcons name='arrow-left' size={27} />
				</TouchableOpacity>
			) : (
				<View style={styles.viewContent} />
			)}

			<Text style={styles.textTitle}>{title}</Text>

			<View style={styles.viewContent} />
		</View>
	);
};

const styles = StyleSheet.create({
	buttonGoBack: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textTitle: { fontWeight: 'bold', textAlign: 'center', fontSize: 23 },
	container: {
		padding: 8,
		height: 50,
		width: '97%',
		marginTop: 30,
		borderRadius: 5,
		borderBottomWidth: 0.5,
		justifyContent: 'space-between',
		borderBottomColor: 'gray',
		flexDirection: 'row',
	},
	viewContent: { width: 50, height: 50 },
});
export default Header;
