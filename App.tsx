import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from '#routes/app.routes';
import { ContextsProvider } from '#contexts/index.context';

export default function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ContextsProvider>
				<AppRoutes />
			</ContextsProvider>
		</QueryClientProvider>
	);
}
