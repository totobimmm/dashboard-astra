import Header from './components/header';
import Chart from './components/first-chart';
import Main from './components/main';

export default function Home() {
	return (
		<div className=' min-h-[calc(100vh-4px)] max-w-7xl mx-auto '>
			<Header />
			<Chart />
			<Main />
		</div>
	);
}
