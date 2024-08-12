import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CreateAccount } from './pages/create-account';
import { Tasks } from './pages/tasks';

const router = createBrowserRouter([
	{
		path: '/',
		element: <CreateAccount />,
	},
	{
		path: '/tasks',
		element: <Tasks />,
	},
]);

export function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}
