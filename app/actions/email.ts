"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const description = formData.get("description") as string;

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY no configurada. El correo no se enviará.");
    return { success: false, error: "API Key no configurada" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "GreenGood Web <onboarding@resend.dev>",
      to: ["barberocardosodavid@gmail.com"],
      subject: `Nuevo Lead de GreenGood: ${name}`,
      html: `
        <h1>Nuevo contacto desde la web GreenGood</h1>
        <p><strong>Nombre/Entidad:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Descripción del proyecto:</strong></p>
        <p>${description}</p>
        <hr />
        <p>Este correo ha sido generado automáticamente por el prototipo Next.js de GreenGood.</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    return { success: false, error: "Fallo crítico en el servidor de correo" };
  }
}
