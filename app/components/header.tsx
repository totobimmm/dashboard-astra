'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SwatchBook } from 'lucide-react';
import Image from 'next/image';
import { themeChange } from 'theme-change';
import { Theme } from '@/types/theme';

export default function Header() {
	const router = useRouter();
	const [theme, setTheme] = useState<string>('');
	const defaultTheme = 'violet';
	const themes: Array<Theme> = ['violet', 'blue', 'emerald', 'rose', 'amber'];

	useEffect(() => {
		const savedTheme: string = localStorage.getItem('theme') || defaultTheme;
		setTheme(savedTheme);
		document.documentElement.setAttribute('data-theme', savedTheme);
		themeChange(true);
	}, []);

	const handleThemeChange = (newTheme: string) => {
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	};
	console.clear();
	return (
		<header>
			<nav>
				<div className='flex items-center justify-between p-8'>
					<div className='flex items-center justify-center space-x-5 text-md font-semibold'>
						<Image
							src='/astra.png'
							alt='Astra'
							width={8000}
							height={8000}
							className='w-14 h-14 rounded-full'
						/>
						<h1 className='text-xl font-semibold'>
							<span className='text-accent'>Astra</span>
							Bot
						</h1>
						<p
							className=' cursor-pointer hover:text-accent duration-300'
							onClick={() => router.push('https://astra-bot.fr/')}
						>
							Home
						</p>
						<p
							className=' cursor-pointer hover:text-accent duration-300'
							onClick={() => router.push('https://astra-bot.fr/commands')}
						>
							Commands
						</p>
						<p
							className=' cursor-pointer hover:text-accent duration-300'
							onClick={() => router.push('https://astra-bot.fr/support')}
						>
							Support
						</p>
						<p
							className=' cursor-pointer hover:text-accent duration-300 text-primary underline underline-offset-[24px]'
							onClick={() => router.push('/')}
						>
							Dashboard
						</p>
						<p
							className=' cursor-pointer hover:text-accent duration-300'
							onClick={() => router.push('https://astra-bot.fr/')}
						>
							Vote
						</p>
						<p
							className=' cursor-pointer hover:text-accent duration-300'
							onClick={() => router.push('https://astra-bot.fr/partners')}
						>
							Partners
						</p>
					</div>
					<div className='flex items-center justify-center space-x-5'>
						<div className='dropdown dropdown-bottom dropdown dropdown-hover'>
							<button
								tabIndex={0}
								className='btn btn-sm btn-square btn-secondary btn-md'
							>
								<SwatchBook />
							</button>
							<ul
								tabIndex={0}
								className='dropdown-content z-[1] -translate-x-[40%] menu px-2 shadow bg-black rounded-box w-52'
							>
								{themes.map((t: string, i: number) => (
									<li className=' space-x-2 bg-black ' key={i}>
										<button
											data-theme={t}
											className={`btn btn-outline btn-secondary hover:btn-accent ${
												theme === t && 'btn-active'
											}`}
											onClick={() => handleThemeChange(t)}
										>
											<p
												className={`text-lg ${
													theme !== t && 'text-white'
												} capitalize`}
											>
												{t}
											</p>
										</button>
									</li>
								))}
							</ul>
						</div>
						<button
							className=' btn btn-outline btn-secondary'
							onClick={() => router.push('https://astra-bot.fr/invite')}
						>
							Add Astra
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
