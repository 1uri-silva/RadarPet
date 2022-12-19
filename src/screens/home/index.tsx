import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet } from 'react-native';

import { Header } from '#components/header';
import { Loading } from '#components/loading';
import { Touchable } from '#components/touchable';
import { ListPets } from '#components/itemsListPets';

import { handleGetAllPets } from '#functions/api/handleGetAllPets';

import { Pet } from '#models/Pets';

const Home: React.FC = () => {
	const { navigate } = useNavigation();

	const { data, isLoading } = useQuery<Pet[] | null>({
		queryFn: () => handleGetAllPets(),
	});

	return (
		<>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<ListPets
						pets={item}
						onPress={() =>
							navigate('Map', {
								latitude: item.location.latitude,
								longitude: item.location.longitude,
							})
						}
					/>
				)}
				style={{ marginBottom: 90 }}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => <Header iconGoBack={false} title='PETS' />}
				ListFooterComponent={() => isLoading && <Loading />}
			/>
			<Touchable
				title='Criar novo pet'
				onPress={() => navigate('Pets')}
				style={styles.buttonNewPet}
			/>
		</>
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
	newPetText: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		fontWeight: '600',
	},
});
export { Home };
