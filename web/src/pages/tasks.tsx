import { CreateTasks } from '../components/create-tasks';
import { Task } from '../components/task';

export function Tasks() {
	return (
		<div className="flex flex-col justify-center items-center w-full min-h-screen gap-20">
			<CreateTasks />
			<div>
				<h1>Tasks to do - 1</h1>
				<div>
					<Task content="React 1" />
					<Task content="REACT 2" checked={true} />
					<Task content="teste" />
				</div>
			</div>
			<div></div>
		</div>
	);
}
