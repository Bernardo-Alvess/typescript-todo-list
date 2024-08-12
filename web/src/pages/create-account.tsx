import { KeyRound, Mail, User } from 'lucide-react';

export function CreateAccount() {
	return (
		<main className="h-screen flex items-center justify-center px-4">
			<div className="flex flex-col items-center justify-around bg-grayish-purple w-[300px] h-[500px] px-10 pyp-14 rounded-lg shadow-md">
				<h1 className="text-zinc-50 font-bold text-3xl">Taskit</h1>
				<form
					className="flex flex-col items-center gap-[18px]"
					action=""
				>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<Mail />
						<input
							type="text"
							placeholder="full name"
							aria-label="full-name"
							name="full-name"
							required
							className="p-2 w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
						/>
					</div>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<User />
						<input
							type="email"
							placeholder="e-mail"
							aria-label="email"
							name="email"
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
							required
							className="p-2 w-full bg-transparent focus:outline-none placeholder:text-zinc-500"
						/>
					</div>
					<div className="flex flex-row items-center bg-dark-purple p-2 rounded-lg ring-light-purple focus-within:ring-1">
						<KeyRound />
						<input
							type="password"
							placeholder="confirm password"
							aria-label="confirm-password"
							name="confirm-password"
							required
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
