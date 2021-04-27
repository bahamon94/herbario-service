// File /api/email/controllers/Email.js
'use strict'

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  /**
   * Sends an email to the recipient in the body of the request
   */
  send: async (ctx) => {
    const body = ctx.request.body
    const sendTo = body.email
    const asunto = body.asunto
    const form = body.form
    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
      const emailOptions = {
        to: sendTo,
        subject: asunto,
        html: `<h1> ${asunto} </h1><p>Se ha realizado una solicitud, con los siguientes datos : </p>
            ${form}
        `,
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ message: 'Error sending email' })
    }
  },
}