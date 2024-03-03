'use server'

export const contact = async (data: any) => {
    await fetch('https://api.mailgun.net/v3/sandbox67c968c5cc49421eb5dd0058c9307249.mailgun.org/messages', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa('api:1507f0dd46564fc950d113b2c0a95b4a-b7b36bc2-4a36f6d0'),
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
