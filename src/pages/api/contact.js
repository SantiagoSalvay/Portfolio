export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validar datos
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Todos los campos son requeridos'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Aquí integrarías con un servicio de email como EmailJS, Resend, o SendGrid
    // Por ahora, simularemos el envío exitoso
    console.log('Nuevo mensaje de contacto:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Simular envío de email a tu dirección
    const emailBody = `
      Nuevo mensaje desde tu portfolio:
      
      Nombre: ${name}
      Email: ${email}
      
      Mensaje:
      ${message}
      
      Enviado desde: ${request.headers.get('origin')}
      Fecha: ${new Date().toLocaleString('es-ES')}
    `;

    // En producción, aquí enviarías el email real
    // Por ejemplo con Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'portfolio@tudominio.com',
      to: 'js.salvay@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      text: emailBody,
      reply_to: email
    });
    */

    return new Response(JSON.stringify({
      success: true,
      message: 'Mensaje enviado correctamente. Te responderé pronto!'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Error interno del servidor. Inténtalo más tarde.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}