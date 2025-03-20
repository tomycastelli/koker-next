'use client'
import { TransitionPanel } from '@/components/motion-primitives/transition-panel'
import { ArrowUpIcon, LockClosedIcon, MixIcon, StackIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export function TransitionPanelComponent() {
	const [activeIndex, setActiveIndex] = useState(0)

	const ITEMS = [
		{
			title: 'Quienes somos?',
			content:
				'Koker es una empresa que se dedica a la compra y venta de criptomonedas. Nos especializamos en transacciones OTC para clientes corporativos y de alto valor.',
		},
		{
			title: 'Que es un OTC?',
			content:
				'Un OTC (Over-the-Counter) Es un mercado extrabursátil donde las transacciones se realizan directamente entre dos partes sin la intermediación de una bolsa centralizada',
		},
		{
			title: 'Beneficios',
			content: '',
			isBenefits: true,
			benefits: [
				{
					title: 'Mayor Liquidez y Operaciones de Gran Volumen',
					description: 'Pueden ejecutar transacciones grandes sin afectar significativamente el precio del mercado.',
					icon: <StackIcon className='h-5 w-5' />,
				},
				{
					title: 'Privacidad y Confidencialidad',
					description:
						'Las operaciones no se publican en libros de órdenes abiertos, lo que protege la estrategia de inversión.',
					icon: <LockClosedIcon className='h-5 w-5' />,
				},
				{
					title: 'Menor Deslizamiento (Slippage)',
					description:
						'Al negociar directamente con contrapartes, se evita el impacto de la volatilidad en exchanges tradicionales.',
					icon: <MixIcon className='h-5 w-5' />,
				},
				{
					title: 'Estructuras de Tarifas Personalizadas',
					description: 'Pueden acceder a mejores condiciones de precios y tarifas según el volumen operado.',
					icon: <ArrowUpIcon className='h-5 w-5' />,
				},
			],
		},
	]

	return (
		<div className='w-full max-w-2xl'>
			<div className='mb-4 flex space-x-2'>
				{ITEMS.map((item, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`rounded-md px-3 py-1 text-sm font-medium ${
							activeIndex === index
								? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
								: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
						}`}
					>
						{item.title}
					</button>
				))}
			</div>
			<div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
				<TransitionPanel
					activeIndex={activeIndex}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
					variants={{
						enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
						center: { opacity: 1, y: 0, filter: 'blur(0px)' },
						exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
					}}
				>
					{ITEMS.map((item, index) => (
						<div key={index} className='py-2'>
							{item.isBenefits ? (
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									{item.benefits?.map((benefit, i) => (
										<div
											key={i}
											className='flex items-start space-x-3 bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10'
										>
											<div className='flex-shrink-0 p-2 bg-blue-600 rounded text-white'>{benefit.icon}</div>
											<div>
												<h3 className='font-medium text-sm text-white'>{benefit.title}</h3>
												<p className='text-xs text-zinc-200 mt-1 leading-relaxed'>{benefit.description}</p>
											</div>
										</div>
									))}
								</div>
							) : (
								<div className='bg-black/30 backdrop-blur-md rounded-lg p-5 border border-white/10'>
									<p className='text-zinc-100 leading-relaxed font-light'>{item.content}</p>
								</div>
							)}
						</div>
					))}
				</TransitionPanel>
			</div>
		</div>
	)
}
