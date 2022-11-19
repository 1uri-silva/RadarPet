import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import {
	FlatList,
	ListRenderItem,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';

import { api } from '../../services';
import Header from '../../components/header';
import Loading from '../../components/loading';

type PetsData = {
	id: string;
	name: string;
	location: {
		latitude: number;
		longitude: number;
	};
};

const Home: React.FC = () => {
	const { navigate } = useNavigation();

	const { data, isLoading } = useQuery<PetsData[] | null>({
		queryKey: ['pets'],
		refetchInterval: 3000,
		queryFn: () => api.get('pets').then((res) => res.data),
	});

	const renderItem: ListRenderItem<PetsData> = useCallback(
		({ item }) => (
			<TouchableOpacity
				onPress={() =>
					navigate('Map', {
						latitude: item.location.latitude,
						longitude: item.location.longitude,
					})
				}
				style={styles.containerListItems}
			>
				<Text style={{ fontSize: 17, fontWeight: '400' }}>{item.name}</Text>
			</TouchableOpacity>
		),
		[navigate]
	);

	return (
		<>
			<FlatList
				data={data}
				renderItem={renderItem}
				style={{ marginBottom: 90 }}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => <Header iconGoBack={false} title='PETS' />}
				ListFooterComponent={() => isLoading && <Loading />}
			/>
			<TouchableOpacity
				onPress={() => navigate('Pets')}
				style={styles.buttonNewPet}
			>
				<Text style={styles.newPetText}>Criar novo pet</Text>
			</TouchableOpacity>
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
export default Home;
