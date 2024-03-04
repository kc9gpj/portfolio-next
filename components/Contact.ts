'use server'

import axios from 'axios';

export const contact = async (data: any) => {
    console.log(`https://api.mailgun.net/v3/${process.env.MAILGUN_URL}/messages`)
    console.log(btoa(`api:${process.env.MAILGUN_KEY}`))
    console.log(`api:${process.env.MAILGUN_KEY}`)
    try {
        const response = await axios.post(`https://api.mailgun.net/v3/${process.env.MAILGUN_URL}/messages`, new URLSearchParams({
            from: 'kc9gpj12@gmail.com',
            to: 'dave@dhoff.net',
            subject: 'New Portfolio Message',
            text: `Name: ${data?.name}  email: ${data?.email}  message: ${data?.message} `
        }).toString(), {
            headers: {
                'Authorization': 'Basic ' + btoa(`api:${process.env.MAILGUN_KEY}`),
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
