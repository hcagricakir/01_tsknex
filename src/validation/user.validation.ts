import Joi from 'joi';
const schema = {
    idControl: Joi.number().min(1),

    create: Joi.object().keys({
        isim: Joi.string().min(1).max(25).required(),
        lokasyon: Joi.string().min(1).max(25).required()
    }),

    update: Joi.object().keys({
        id: Joi.number(),
        isim: Joi.string().min(1).max(25).optional(),
        lokasyon: Joi.string().min(1).max(25).optional()
    }),

    list: Joi.object().keys({
        limit: Joi.number().integer().optional(),
        skip: Joi.number().integer().optional(),
        orderBy: Joi.string().optional(),
        orderSort: Joi.string().optional(),
        lokasyon: Joi.string().optional(),

    })
}
export default schema;