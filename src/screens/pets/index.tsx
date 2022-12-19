import { useState } from 'react';
import { View } from 'react-native';
import uuid from 'react-native-uuid';

import { useLocation } from '#hooks/useLocation';

import { Input } from '#components/input';
import { Header } from '#components/header';
import { Touchable } from '#components/touchable';

import { handleNewPet } from '#functions/api/handleNewPet';

const Pets: React.FC = () => {
	const { initialRegion } = useLocation();

	const [age, setAge] = useState(0);
	const [petName, setPetName] = useState('');
	const [species, setSpecies] = useState('');

	return (
		<View style={{ flex: 1 }}>
			<Header title='Novo Pet' />

			<Input label='Nome do pet' onChangeText={setPetName} />
			<Input
				label='Idade do pet'
				onChangeText={(e) => setAge(Number(e))}
				keyboardType='numeric'
			/>
			<Input label='Raça do pet' onChangeText={setSpecies} />

			<Touchable
				title='Novo Pet'
				onPress={() =>
					handleNewPet({
						id: uuid.v4(),
						name: petName,
						age,
						species,
						location: initialRegion,
					})
				}
			/>
		</View>
	);
};

export { Pets };
