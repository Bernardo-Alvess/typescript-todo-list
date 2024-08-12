import { Check, Trash } from 'lucide-react';
import { useState } from 'react';

interface TaskProps {
	content: string;
	checked?: boolean;
}

export function Task({ content, checked = false }: TaskProps) {
	const [hasChecked, setHasChecked] = useState(checked);

	function handleTaskCheck() {
		setHasChecked(!hasChecked);
	}

	return (
		<>
			<div
				data-checked={hasChecked}
				className="grid grid-cols-12 gap-4 bg-grayish-purple min-h-[75px] max-w-[450px] p-4 rounded-lg items-center text-light-purple m-4 cursor-pointer hover:bg-dark-purple transition-colors data-[checked=true]:line-through data-[checked=true]:pointer-events-none"
			>
				<p className="col-span-10">{content}</p>
				<div className="col-span-2 flex gap-3">
					<button className="size-[30px]" onClick={handleTaskCheck}>
						<Check
							className={`hover:text-green-700 transition-colors
                        ${hasChecked ? 'text-green-700' : ''}
                        `}
						/>
					</button>
					<button>
						<Trash className="hover:text-red-700 transition-colors" />
					</button>
				</div>
			</div>
		</>
	);
}
