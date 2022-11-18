import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Map from './src/map';
import Home from './src/home';
import Pets from './src/pets';
import AppRoutes from './src/routes/app.routes';

export default function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<AppRoutes />
		</QueryClientProvider>
	);
}
