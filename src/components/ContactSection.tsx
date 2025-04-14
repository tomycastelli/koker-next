'use client'

import { registerUser } from '@/app/actions/sendEmail'
import { Button } from '@/components/ui/button'
import type { AnyFieldApi } from '@tanstack/react-form'
import { useForm } from '@tanstack/react-form'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { BorderTrail } from './motion-primitives/border-trail'
import { InView } from './ui/in-view'

function FieldInfo({ field }: { field: AnyFieldApi }) {
	return (
		<>
			{field.state.meta.isTouched && field.state.meta.errors.length ? (
				<span className='text-sm text-red-500 mt-1'>{field.state.meta.errors.join(', ')}</span>
			) : null}
			{field.state.meta.isValidating ? <span className='text-sm text-zinc-500 mt-1'>Validando...</span> : null}
		</>
	)
}

export function ContactSection() {
	const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string }>({})

	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
		},
		onSubmit: async ({ value }) => {
			const result = await registerUser(value)
			setFormStatus(result)

			if (result.success) {
				toast.success(result.message)
				form.reset()
			} else {
				toast.error(result.message)
			}
		},
	})

	return (
		<section
			id='contact'
			className='relative w-full min-h-screen lg:h-screen py-16 lg:py-0 flex items-center justify-center overflow-hidden text-white'
			style={{
				backgroundImage: 'url(/blue-gradient-2.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			<div className='absolute inset-0 bg-black/20 backdrop-blur-[4px]' />

			<div className='relative z-10 w-full h-full flex items-center justify-center'>
				<div className='w-full max-w-md'>
					<InView
						variants={{
							hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
							visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
						}}
						viewOptions={{ margin: '0px 0px -200px 0px' }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						{/* Contact Form */}
						<div className='flex flex-col items-center justify-center text-center py-8 sm:py-12 lg:py-16'>
							<div className='w-full max-w-md bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg'>
								<BorderTrail
									transition={{
										duration: 10,
										delay: 0,
										repeat: Infinity,
										repeatType: 'loop',
									}}
									style={{
										boxShadow:
											'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
									}}
									size={80}
								/>
								<h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>Contactanos</h2>

								<form
									onSubmit={e => {
										e.preventDefault()
										e.stopPropagation()
										form.handleSubmit()
									}}
									className='flex flex-col space-y-4'
								>
									<div>
										<form.Field
											name='name'
											validators={{
												onSubmit: ({ value }) =>
													!value
														? 'El nombre es obligatorio'
														: value.length < 2
														? 'El nombre debe tener al menos 2 caracteres'
														: undefined,
											}}
										>
											{field => (
												<div className='flex flex-col space-y-1'>
													<label htmlFor={field.name} className='text-sm font-medium text-zinc-200 text-left'>
														Nombre
													</label>
													<input
														id={field.name}
														name={field.name}
														value={field.state.value}
														onBlur={field.handleBlur}
														onChange={e => field.handleChange(e.target.value)}
														className='h-9 w-full rounded-lg border border-zinc-700 bg-white/10 px-3 text-base text-white outline-hidden focus:ring-2 focus:ring-white/20 dark:border-zinc-600 dark:bg-zinc-800/50 dark:text-white sm:text-sm'
														placeholder='Tu nombre'
													/>
													<FieldInfo field={field} />
												</div>
											)}
										</form.Field>
									</div>

									<div>
										<form.Field
											name='email'
											validators={{
												onSubmit: ({ value }) =>
													!value
														? 'El correo electrónico es obligatorio'
														: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
														? 'Introduce un correo electrónico válido'
														: undefined,
											}}
										>
											{field => (
												<div className='flex flex-col space-y-1'>
													<label htmlFor={field.name} className='text-sm font-medium text-zinc-200 text-left'>
														Correo electrónico
													</label>
													<input
														id={field.name}
														name={field.name}
														value={field.state.value}
														onBlur={field.handleBlur}
														onChange={e => field.handleChange(e.target.value)}
														className='h-9 w-full rounded-lg border border-zinc-700 bg-white/10 px-3 text-base text-white outline-hidden focus:ring-2 focus:ring-white/20 dark:border-zinc-600 dark:bg-zinc-800/50 dark:text-white sm:text-sm'
														placeholder='tu@correo.com'
													/>
													<FieldInfo field={field} />
												</div>
											)}
										</form.Field>
									</div>

									{formStatus.message && !formStatus.success && (
										<div className='text-sm text-red-500'>{formStatus.message}</div>
									)}

									<form.Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
										{([canSubmit, isSubmitting]) => (
											<Button
												type='submit'
												disabled={!canSubmit || isSubmitting}
												className='inline-flex items-center justify-center self-end rounded-lg bg-green-500 hover:bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors disabled:bg-green-300 disabled:cursor-not-allowed'
											>
												{isSubmitting ? (
													<>
														<Loader2 className='mr-2 h-4 w-4 animate-spin' />
														Enviando...
													</>
												) : (
													'Unirse ahora'
												)}
											</Button>
										)}
									</form.Subscribe>
								</form>
							</div>
						</div>
					</InView>
				</div>
			</div>
		</section>
	)
}
