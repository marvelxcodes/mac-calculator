import { useState } from 'react';
import Button from './Button';

function App() {
	const [expression, setExpression] = useState<string>();

	return (
		<div className="w-full bg-slate-600 h-screen grid place-content-center">
			<div className="h-[90vh] aspect-[9/17] bg-black rounded-[2.5rem] p-3 ">
				<div className='grid grid-cols-4 place-items-center grid-rows-4 h-2/3'>
					<Button type="light">7</Button>
					<Button type="light">8</Button>
					<Button type="light">9</Button>
					<Button type="accent">÷</Button>
          <Button type="dark">7</Button>
					<Button type="dark">8</Button>
					<Button type="dark">9</Button>
					<Button type="accent">×</Button>
          <Button type="dark">4</Button>
					<Button type="dark">5</Button>
					<Button type="dark">6</Button>
					<Button type="accent">−</Button>
          <Button type="dark">1</Button>
					<Button type="dark">2</Button>
					<Button type="dark">3</Button>
					<Button type="accent">+</Button>
				</div>
        <div className='flex'>
          <div>
            <h1>0</h1>
          </div>
          <Button type='dark'>.</Button>
          <Button type='dark'>=</Button>
        </div>
			</div>
		</div>
	);
}

export default App;
