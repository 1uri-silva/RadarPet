import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	FlatList,
	ListRenderItem,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { api } from '../services';

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

	const { data } = useQuery<PetsData[] | null>({
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
				style={{
					width: '97%',
					height: 50,
					padding: 10,
					marginTop: 10,
					marginLeft: 8,
					borderBottomWidth: 0.7,
					borderBottomColor: 'gray',
				}}
			>
				<Text style={{ fontSize: 17, fontWeight: '400' }}>{item.name}</Text>
			</TouchableOpacity>
		),
		[]
	);

	return (
		<>
			<FlatList
				data={data}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				style={{ marginBottom: 90 }}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => (
					<View
						style={{
							width: '97%',
							justifyContent: 'center',
							height: 50,
							padding: 8,
							marginTop: 30,
							borderBottomColor: 'gray',
							borderBottomWidth: 0.5,
							borderRadius: 5,
						}}
					>
						<Text
							style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 23 }}
						>
							PETS
						</Text>
					</View>
				)}
			/>
			<TouchableOpacity
				onPress={() => navigate('Pets')}
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
					Criar novo pet
				</Text>
			</TouchableOpacity>
		</>
	);
};

export default Home;
