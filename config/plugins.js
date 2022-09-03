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
        defaultFrom: 'herbariousco@gmail.com',
        defaultReplyTo: 'herbariousco@gmail.com',
      },
    },
    // ...
  })
