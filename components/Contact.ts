'use server'
import mailgun from 'mailgun-js';

export const contact = async (formData: any) => {
    try {
        const DOMAIN = "sandbox67c968c5cc49421eb5dd0058c9307249.mailgun.org";
        const mg = mailgun({ apiKey: process.env.MAILGUN || '', domain: DOMAIN });
        const data = {
            from: "Mailgun Sandbox <postmaster@sandbox67c968c5cc49421eb5dd0058c9307249.mailgun.org>",
            to: "dave@dhoff.net",
            subject: `Portfolio Message from: ${formData.email}`,
            text: `email: ${formData?.email}, name: ${formData?.name}, message: ${formData?.message}`,
        };
        mg.messages().send(data, function (error, body) {
            console.log(body);
            return body;
        });

    } catch (e) {
        return e
    }
}
