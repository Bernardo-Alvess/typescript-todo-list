import { Plus } from 'lucide-react';
import { useState } from 'react';
import { createTask } from '../http/create-task';
import { getUserIdFromToken } from '../util/get-user-id-from-token';

export function CreateTasks({ onTaskCreated }) {
	const [data, setData] = useState({
		content: '',
	});

	const handleTaskCreate = async () => {
		const userId = getUserIdFromToken();
		const newTask = await createTask({ content: data.content, userId });

		if (onTaskCreated) onTaskCreated(newTask);
	};

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};
	return (
		<div className="flex justify-between min-w-[450px] min-h-[50px] gap-4">
			<input
				className="placeholder:text-zinc-600 pl-3 bg-transparent w-full rounded-2xl border border-light-purple outline-none"
				type="text"
				name="content"
				value={data.content}
				onChange={handleChange}
				placeholder="Adicionar nova tarefa"
				required
			/>
			<button
				className="bg-light-purple col-span-2 flex justify-center items-center rounded-lg p-4 hover:bg-purple-600 transition-colors"
				onClick={handleTaskCreate}
			>
				<Plus />
			</button>
		</div>
	);
}
