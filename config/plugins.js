module.exports = () => ({
    // ...
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp-relay.sendinblue.com',
        port:  587,
        auth: {
          user: 'herbariousco@gmail.com',
          pass: 'xsmtpsib-510ef1db4ccff3c171641af771728ddce19cda10bc9bb9a567069ef8772b60cb-6M0CDBLVHSXFyQTs',
        },
      },
      settings: {
        defaultFrom: 'tatisramos93@gmail.com',
        defaultReplyTo: 'tatisramos93@gmail.com',
      },
    },
    // ...
  })
