'use server'

export const contact = async (data: any) => {
    await fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_URL}/messages`, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`api:${process.env.MAILGUN}`),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            from: 'kc9gpj12@gmail.com',
            to: 'dave@dhoff.net',
            subject: 'New Portfolio Message',
            text: `Name: ${data?.name}  email: ${data?.email}  message: ${data?.message} `
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
