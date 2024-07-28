'use client';
import React, { useState } from 'react';
import modules from '../modules.json';

export default function Main() {
	const [selectedModule, setSelectedModule] = useState('');
	const [selectedChannel, setSelectedChannel] = useState('');

	function handleModuleAction(action: 'enable' | 'disable') {
		if (!selectedModule || !selectedChannel) {
			alert("Veuillez sélectionner un module et saisir l'ID du canal");
			return;
		}
		console.log(
			`${
				action === 'enable' ? 'Activation' : 'Désactivation'
			} du module ${selectedModule} dans le canal ${selectedChannel}`
		);
	}

	return (
		<main className='card card-bordered my-36 mx-auto w-fit'>
			<div className='card-body'>
				<h2 className='card-title text-2xl text-accent'>Module management</h2>

				<div className='mt-4'>
					<select
						className='select select-bordered w-full max-w-xs mb-2'
						value={selectedModule}
						onChange={(e) => setSelectedModule(e.target.value)}
					>
						<option value={''}>Select a module</option>
						{Object.entries(modules).map(([key, moduleList]) =>
							moduleList.map((module: string) => (
								<option key={module} value={module}>
									{module}
								</option>
							))
						)}
					</select>
					<input
						type='text'
						placeholder='Channel ID'
						className='input input-bordered w-full max-w-xs mb-2'
						value={selectedChannel}
						onChange={(e) => setSelectedChannel(e.target.value)}
					/>
					<div className='flex justify-center items-center space-x-2'>
						<button
							className='btn btn-primary'
							onClick={() => handleModuleAction('enable')}
						>
							Enable
						</button>
						<button
							className='btn btn-secondary'
							onClick={() => handleModuleAction('disable')}
						>
							Disable
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
