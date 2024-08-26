import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { CreateAccount } from './pages/create-account';
import { Tasks } from './pages/tasks';
import { Login } from './pages/login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/createAccount',
		element: <CreateAccount />,
	},
	{
		path: '/tasks/:id',
		element: <Tasks />,
	},
]);

export function App() {
	return (
		<>
			<Toaster
				position="bottom-right"
				toastOptions={{
					style: {
						borderRadius: '10px',
						background: '#9E78CF',
						color: '#000',
					},
				}}
			/>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}
