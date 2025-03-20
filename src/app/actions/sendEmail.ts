'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function registerUser(formData: { name: string; email: string }) {
	const send_to_mail = process.env.SENT_TO_MAIL
	if (!send_to_mail) {
		throw new Error('No se encontró la variable de entorno SENT_TO_MAIL')
	}

	const { name, email } = formData

	if (!name || !email) {
		return {
			success: false,
			message: 'Por favor, proporciona nombre y correo electrónico',
		}
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(email)) {
		return {
			success: false,
			message: 'Correo electrónico inválido',
		}
	}

	try {
		const sendEmail = await resend.emails.send({
			from: 'Formulario Koker <website@clientes.koker.io>',
			to: `Koker Support <${send_to_mail}>`,
			subject: `Formulario de ${name}`,
			text: `
      Llegó un nuevo cliente interesado:
      Nombre: ${name}
      Email: ${email}
      `,
		})

		if (sendEmail.data) {
			return {
				success: true,
				message: '¡Mensaje enviado correctamente!',
			}
		} else {
			throw new Error(sendEmail.error?.message || 'Error al enviar el correo electrónico')
		}
	} catch (error) {
		return {
			success: false,
			message: `Error al enviar el mensaje: ${error instanceof Error ? error.message : 'Error desconocido'}`,
		}
	}
}
