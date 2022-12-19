import {
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native';

import { Pet } from '#models/Pets';

type PropsTouchablePet = TouchableOpacityProps & {
	pets: Pet;
};

const ListPets: React.FC<PropsTouchablePet> = ({ pets, ...rest }) => {
	return (
		<TouchableOpacity style={styles.containerListItems} {...rest}>
			<Text style={styles.namePet}>{pets.name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	namePet: { fontSize: 17, fontWeight: '400' },
	containerListItems: {
		width: '97%',
		height: 50,
		padding: 10,
		marginTop: 10,
		marginLeft: 8,
		borderBottomWidth: 0.7,
		borderBottomColor: 'gray',
	},
});

export { ListPets };
