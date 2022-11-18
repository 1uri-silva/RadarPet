import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import uuid from 'react-native-uuid';

import { api } from '../services';
import { useLocation } from '../hooks/useLocation';
import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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
	const { getCoordinates } = useLocation();
	const [petName, setPetName] = useState('');

	const [location, setLocation] = useState({
		latitude: null,
		longitude: null,
	});
	useEffect(() => {
		(async () => {
			const { latitude, longitude } = await getCoordinates();

			setLocation({
				latitude,
				longitude,
			});
		})();
	}, []);

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
						api
							.post<PetsData>('pets', {
								id: uuid.v4(),
								name: petName,
								location: {
									latitude: location.latitude,
									longitude: location.longitude,
								},
							})
							.then(() => goBack());
					},
				},
			]
		);
	}, [location, petName]);

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					width: '100%',
					height: 250,
					justifyContent: 'center',
					padding: 10,
				}}
			>
				<Text
					style={{
						fontSize: 15,
						marginBottom: 7,
						fontWeight: '400',
					}}
				>
					Nome do pet
				</Text>
				<TextInput
					value={petName}
					onChangeText={setPetName}
					placeholder='Digite o nome do pet'
					style={{
						padding: 8,
						borderRadius: 7,
						borderColor: 'gray',
						borderWidth: 0.7,
						fontWeight: '500',
						fontSize: 14,
					}}
				/>
			</View>
			<TouchableOpacity
				onPress={handlePostApi}
				style={{
					height: 60,
					bottom: 20,
					width: '90%',
					marginTop: 17,
					marginLeft: 17,
					borderRadius: 5,
					position: 'absolute',
					backgroundColor: 'green',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						fontSize: 20,
						color: 'white',
						fontWeight: '600',
					}}
				>
					Criar pet
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Pets;
