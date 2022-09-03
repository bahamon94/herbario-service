module.exports = () => ({
    // ...
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp-relay.sendinblue.com',
        port:  587,
        auth: {
          user: 'herbariousco@gmail.com',
          pass: 'U2fF5A8smkQCPMX0',
        },
      },
      settings: {
        defaultFrom: 'tatisramos93@gmail.com',
        defaultReplyTo: 'tatisramos93@gmail.com',
      },
    },
    // ...
  })
