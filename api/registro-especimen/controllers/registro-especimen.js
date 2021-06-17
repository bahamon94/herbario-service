'use strict';


/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
module.exports = {
    async uploadFile(ctx) {

            let data;
            try {
                let fileTransformedToArray = ctx.request.body //preparing empty array for storing entities.
                fileTransformedToArray.forEach( async entity => {
                    console.log('REGISTRANDO->',entity);
                   await strapi.services['registro-especimen'].add(entity);
                   data.push(entity)
                });
                return data
            } catch (error) {
                console.log('error en guardando', error)
              return data
            }

        },
};
