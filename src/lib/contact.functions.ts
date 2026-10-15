import { createServerFn } from "@tanstack/react-start";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((d: { data: ContactFormData }) => d)
  .handler(async ({ data }) => {
    // KODE DI BAWAH INI SEKARANG SUDAH MENGGUNAKAN URL API SUBMIT YANG BENAR
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "249440d9-43c2-4014-99de-2ee37c54419b",
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to send email");
    }

    return { success: true };
  });
