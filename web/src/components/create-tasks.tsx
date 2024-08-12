import { Plus } from 'lucide-react';

export function CreateTasks() {
	//function handleCreateTask() {}

	return (
		<div className="flex justify-between min-w-[450px] min-h-[50px] gap-4">
			<input
				className="placeholder:text-zinc-600 pl-3 bg-transparent w-full rounded-2xl border border-light-purple outline-none"
				type="text"
				placeholder="Adicionar nova tarefa"
				required
			/>
			<button className="bg-light-purple col-span-2 flex justify-center items-center rounded-lg p-4 hover:bg-purple-600 transition-colors">
				<Plus />
			</button>
		</div>
	);
}
