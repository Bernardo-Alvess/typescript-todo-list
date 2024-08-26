import { KeyRound, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../http/login';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { getUserIdFromToken } from '../util/get-user-id-from-token';

export function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		const { email, password } = formData;

		const token = await loginUser({ email, password });

		if (!token) {
			toast.error('Failed to login');
			return;
		}

		Cookies.set('jwt', token, { expires: 14 });
		const id = getUserIdFromToken();

		navigate(`/tasks/${id}`);
	};

	return (
		<main className="h-screen flex items-center justify-center px-4">
			<div className="flex flex-col items-center justify-center gap-8 bg-grayish-purple w-[300px] h-[500px] px-10 pyp-14 rounded-lg shadow-md">
				<h1 className="text-zinc-50 font-bold text-3xl">Taskit</h1>
				<form
					className="flex flex-col items-center gap-[18px]"
					onSubmit={handleLogin}
				>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<User />
						<input
							type="email"
							placeholder="e-mail"
							aria-label="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="p-2 w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
						/>
					</div>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<KeyRound />
						<input
							type="password"
							placeholder="password"
							aria-label="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
							className="p-2 w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
						/>
					</div>
					<a
						href="/createAccount"
						className="text-light-purple underline decoration-light-purple underline-offset-4 hover:text-purple-700"
					>
						Don't have an account?
					</a>
					<button
						type="submit"
						className="mt-4 bg-purple-600 text-white p-2 rounded-md w-full"
					>
						Log In
					</button>
				</form>
			</div>
		</main>
	);
}
