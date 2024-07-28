'use client';

import {
	AreaChart,
	Area,
	CartesianGrid,
	Tooltip,
	Legend,
	XAxis,
	YAxis,
} from 'recharts';
import { useEffect, useState } from 'react';

import React from 'react';

const CustomXAxis = () => (
	<XAxis
		dataKey='name'
		ticks={[
			'Page A',
			'Page B',
			'Page C',
			'Page D',
			'Page E',
			'Page F',
			'Page G',
		]}
		tickFormatter={(value: number) => `${value}`}
	/>
);

const CustomYAxis = () => (
	<YAxis
		ticks={[0, 2500, 5000, 7500, 10000]}
		tickFormatter={(value: number) => `$${value}`}
	/>
);

export default function Chart() {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		setData([
			{
				name: 'Page A',
				violet: Math.random() * 10000,
				green: Math.random() * 10000,
				white: Math.random() * 10000,
			},
			{
				name: 'Page B',
				violet: Math.random() * 10000,
				green: Math.random() * 10000,
				white: Math.random() * 10000,
			},
			{
				name: 'Page C',
				violet: Math.random() * 10000,
				green: Math.random() * 10000,
				white: Math.random() * 10000,
			},
			{
				name: 'Page D',
				violet: Math.random() * 10000,
				green: Math.random() * 10000,
				white: Math.random() * 10000,
			},
			{
				name: 'Page E',
				violet: Math.random() * 10000,
				green: Math.random() * 10000,
				white: Math.random() * 10000,
			},
			{
				name: 'Page F',
				violet: Math.random() * 10000,
				green: Math.random() * 10000,
				white: Math.random() * 10000,
			},
			{
				name: 'Page G',
				violet: Math.random() * 10000,
				green: Math.random() * 10000,
				white: Math.random() * 10000,
			},
		]);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setData([
				{
					name: 'Page A',
					violet: (Math.random() * 10000).toFixed(0),
					green: (Math.random() * 10000).toFixed(0),
					white: (Math.random() * 10000).toFixed(0),
				},
				{
					name: 'Page B',
					violet: (Math.random() * 10000).toFixed(0),
					green: (Math.random() * 10000).toFixed(0),
					white: (Math.random() * 10000).toFixed(0),
				},
				{
					name: 'Page C',
					violet: (Math.random() * 10000).toFixed(0),
					green: (Math.random() * 10000).toFixed(0),
					white: (Math.random() * 10000).toFixed(0),
				},
				{
					name: 'Page D',
					violet: (Math.random() * 10000).toFixed(0),
					green: (Math.random() * 10000).toFixed(0),
					white: (Math.random() * 10000).toFixed(0),
				},
				{
					name: 'Page E',
					violet: (Math.random() * 10000).toFixed(0),
					green: (Math.random() * 10000).toFixed(0),
					white: (Math.random() * 10000).toFixed(0),
				},
				{
					name: 'Page F',
					violet: (Math.random() * 10000).toFixed(0),
					green: (Math.random() * 10000).toFixed(0),
					white: (Math.random() * 10000).toFixed(0),
				},
				{
					name: 'Page G',
					violet: (Math.random() * 10000).toFixed(0),
					green: (Math.random() * 10000).toFixed(0),
					white: (Math.random() * 10000).toFixed(0),
				},
			]);
		}, 4000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className=' w-full h-full'>
			<AreaChart
				className=' mx-auto '
				width={730}
				height={250}
				data={data}
				margin={{ top: 10, bottom: 0 }}
			>
				<defs className=' '>
					<linearGradient id='violet' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#8884d8' stopOpacity={0.5} />
						<stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
					</linearGradient>
					<linearGradient id='green' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#82ca9d' stopOpacity={0.5} />
						<stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
					</linearGradient>
					<linearGradient id='white' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#fff' stopOpacity={0.5} />
						<stop offset='95%' stopColor='#fff' stopOpacity={0} />
					</linearGradient>
				</defs>
				<CustomXAxis />
				{/* si tu veux les valeurs par intervalle remplace par
				<XAxis
		dataKey='name'
		ticks={[
			'Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G',
			]}
		tickFormatter={(value: number) => `${value}`} 
		/> 
		mais tu risques d'avoir une erreur */}
				<CustomYAxis />
				{/* si tu veux les valeurs par intervalle remplace par 	<YAxis
		ticks={[0, 2500, 5000, 7500, 10000]}
		tickFormatter={(value: number) => `$${value}`}
	/>  
	mais tu risques d'avoir une erreur */}
				<CartesianGrid strokeDasharray='0 0' className=' stroke-accent ' />
				<Tooltip />
				<Area
					type='monotone'
					dataKey='violet'
					stroke='#8884d8'
					fillOpacity={1}
					fill='url(#violet)'
				/>
				<Area
					type='monotone'
					dataKey='green'
					stroke='#82ca9d'
					fillOpacity={1}
					fill='url(#green)'
				/>
				<Area
					type='monotone'
					dataKey='white'
					stroke='#fff'
					fillOpacity={1}
					fill='url(#white)'
				/>
				<Legend />
			</AreaChart>
		</div>
	);
}
