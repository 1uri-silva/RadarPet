import { useCallback, useEffect, useState } from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import uuid from 'react-native-uuid';

import { api } from '../../services';
import Header from '../../components/header';
import { useLocation } from '../../hooks/useLocation';

type PetsData = {
	id: string;
	name: string;
	location: {
		latitude: number;
		longitude: number;
	};
};

const Pets: React.FC = () => {
	const { goBack } = useNavigation();
	const { region, getCoordinates } = useLocation();

	const [petName, setPetName] = useState('');

	const handleNewPet = useCallback(() => {
		api
			.post<PetsData>('pets', {
				id: uuid.v4(),
				name: petName,
				location: {
					latitude: region.latitude,
					longitude: region.longitude,
				},
			})
			.then(() => goBack());
	}, [region, petName, goBack]);

	const handlePostApi = useCallback(() => {
		Alert.alert(
			'',
			'Sua localização é criada automaticamente de acordo sua onde você estiver no momento da criação.',
			[
				{ text: 'Cancelar', style: 'cancel' },
				{
					text: 'Criar',
					style: 'default',
					onPress() {
						handleNewPet();
					},
				},
			]
		);
	}, [handleNewPet]);

	useEffect(() => {
		getCoordinates();
	}, [getCoordinates]);

	return (
		<View style={{ flex: 1 }}>
			<Header title='Novo Pet' />
			<View style={styles.content}>
				<Text style={styles.textLabel}>Nome do pet</Text>
				<TextInput
					value={petName}
					onChangeText={setPetName}
					placeholder='Digite o nome do pet'
					style={styles.inputPetName}
				/>
			</View>
			<TouchableOpacity onPress={handlePostApi} style={styles.buttonNewPet}>
				<Text style={styles.textNewPet}>Criar pet</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		width: '100%',
		height: 250,
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
export default Pets;
