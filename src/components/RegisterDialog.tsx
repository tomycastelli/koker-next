'use client'

import { registerUser } from '@/app/actions/sendEmail'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/motion-primitives/dialog'
import { GlowEffect } from '@/components/motion-primitives/glow-effect'
import { Button } from '@/components/ui/button'
import type { AnyFieldApi } from '@tanstack/react-form'
import { useForm } from '@tanstack/react-form'
import { Loader2, LogIn, X } from 'lucide-react'
import { Transition, Variants } from 'motion/react'
import { useState } from 'react'
import { toast } from 'sonner'

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

export function RegisterDialog() {
	const [isOpen, setIsOpen] = useState(false)
	const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string }>({})

	const dialogVariants: Variants = {
		initial: {
			scale: 0.9,
			filter: 'blur(10px)',
			y: '100%',
		},
		animate: {
			scale: 1,
			filter: 'blur(0px)',
			y: 0,
		},
	}

	const dialogTransition: Transition = {
		type: 'spring',
		bounce: 0,
		duration: 0.4,
	}

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
				setIsOpen(false)
				form.reset()
			} else {
				toast.error(result.message)
			}
		},
	})

	return (
		<>
			<div className='relative'>
				<GlowEffect
					colors={['#00FF00', '#32CD32', '#228B22', '#008000', '#00CC00', '#009900', '#006600', '#00FF7F']}
					mode='colorShift'
					className='-z-10'
					blur='soft'
					duration={3}
					scale={1.0}
				/>
				<Button
					className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 md:px-4 rounded-md transition-colors'
					aria-label='Registrate ahora'
					onClick={() => setIsOpen(true)}
				>
					<div className='flex flex-row gap-x-2 items-center'>
						<span className='hidden sm:inline'>Registrate ahora</span>
						<LogIn className='h-full w-full stroke-2' />
					</div>
				</Button>
			</div>
			<Dialog open={isOpen} onOpenChange={setIsOpen} variants={dialogVariants} transition={dialogTransition}>
				<DialogContent className='w-full max-w-md bg-white p-6 dark:bg-zinc-900'>
					<DialogHeader>
						<DialogTitle className='text-zinc-900 dark:text-white'>Regístrate en Koker</DialogTitle>
						<DialogDescription className='text-zinc-600 dark:text-zinc-400'>
							Introduce tus datos para recibir actualizaciones sobre nuestro lanzamiento.
						</DialogDescription>
					</DialogHeader>

					<form
						onSubmit={e => {
							e.preventDefault()
							e.stopPropagation()
							form.handleSubmit()
						}}
						className='mt-6 flex flex-col space-y-4'
					>
						<div>
							<form.Field
								name='name'
								validators={{
									onChange: ({ value }) =>
										!value
											? 'El nombre es obligatorio'
											: value.length < 2
											? 'El nombre debe tener al menos 2 caracteres'
											: undefined,
								}}
							>
								{field => (
									<div className='flex flex-col space-y-1'>
										<label htmlFor={field.name} className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
											Nombre
										</label>
										<input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={e => field.handleChange(e.target.value)}
											className='h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-hidden focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm'
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
									onChange: ({ value }) =>
										!value
											? 'El correo electrónico es obligatorio'
											: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
											? 'Introduce un correo electrónico válido'
											: undefined,
								}}
							>
								{field => (
									<div className='flex flex-col space-y-1'>
										<label htmlFor={field.name} className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
											Correo electrónico
										</label>
										<input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={e => field.handleChange(e.target.value)}
											className='h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-hidden focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm'
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

					<DialogClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
						<X className='h-4 w-4' />
						<span className='sr-only'>Cerrar</span>
					</DialogClose>
				</DialogContent>
			</Dialog>
		</>
	)
}
