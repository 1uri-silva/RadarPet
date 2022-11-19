import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading: React.FC = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color='#000' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
	},
});

export default Loading;
