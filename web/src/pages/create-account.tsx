import { KeyRound, Mail, User } from 'lucide-react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { createAccount } from '../http/create-account';
import { getUserIdFromToken } from '../util/get-user-id-from-token';

export function CreateAccount() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	async function handleCreateAccount(event) {
		event.preventDefault();
		const { name, email, password, confirmPassword } = formData;

		if (password == confirmPassword) {
			const token = await createAccount({ name, email, password });

			if (!token) {
				toast.error('Failed to create account');
				return;
			}

			Cookies.set('jwt', token, { expires: 14 });
			const id = getUserIdFromToken();

			navigate(`/tasks/${id}`);
		}

		toast.error("Password don't match");
	}

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<main className="h-screen flex items-center justify-center px-4">
			<div className="flex flex-col items-center justify-around bg-grayish-purple w-[300px] h-[500px] px-10 pyp-14 rounded-lg shadow-md">
				<h1 className="text-zinc-50 font-bold text-3xl">Taskit</h1>
				<form
					onSubmit={handleCreateAccount}
					className="flex flex-col items-center gap-[18px]"
				>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<User />
						<input
							type="text"
							placeholder="name"
							aria-label="full-name"
							name="name"
							required
							value={formData.name}
							onChange={handleChange}
							className="p-2 w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
						/>
					</div>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<Mail />
						<input
							type="email"
							placeholder="e-mail"
							aria-label="email"
							name="email"
							required
							value={formData.email}
							onChange={handleChange}
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
							required
							value={formData.password}
							onChange={handleChange}
							className="p-2 w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
						/>
					</div>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<KeyRound />
						<input
							type="password"
							placeholder="confirm password"
							aria-label="confirm-password"
							name="confirmPassword"
							required
							value={formData.confirmPassword}
							onChange={handleChange}
							className="p-2 w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
						/>
					</div>
					<button
						type="submit"
						className="mt-4 bg-purple-600 text-white p-2 rounded-md w-full"
					>
						Create Account
					</button>
				</form>
			</div>
		</main>
	);
}
