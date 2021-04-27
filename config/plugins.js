module.exports = () => ({
    // ...
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp-relay.sendinblue.com',
        port:  587,
        auth: {
          user: 'ktrs_9303@hotmail.com',
          pass: 't3yOzh1AgbvGK4Fn',
        },
      },
      settings: {
        defaultFrom: 'ktrs_9303@hotmail.com',
        defaultReplyTo: 'ktrs_9303@hotmail.com',
      },
    },
    // ...
  })