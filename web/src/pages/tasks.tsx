import { useEffect, useState } from 'react';
import { CreateTasks } from '../components/create-tasks';
import { Task } from '../components/task';
import { getTasks } from '../http/get-tasks';
import toast from 'react-hot-toast';

export function Tasks() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const userTasks = await getTasks();
				setTasks(userTasks);
			} catch (e) {
				toast.error(e.message);
			}
		};

		fetchTasks();
	}, []);

	const handleTaskCreated = (newTask) => {
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full min-h-screen gap-20">
			<CreateTasks onTaskCreated={handleTaskCreated} />
			<div>
				<h1>Tasks to do - 1</h1>
				<div>
					{tasks.map((task, index) => (
						<Task
							key={index}
							content={task.content}
							checked={task.checked}
						/>
					))}
				</div>
			</div>
			<div></div>
		</div>
	);
}
