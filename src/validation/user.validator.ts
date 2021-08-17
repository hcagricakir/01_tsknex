import Joi from 'joi';
const schema = {
    idControl: Joi.object().keys({
        id: Joi.number().min(1).required()
    }),
    create: Joi.object().keys({
        id: Joi.number().required(),
        isim: Joi.string().min(1).max(25).required(),
        lokasyon: Joi.string().min(1).max(25).required()
    }),

    update: Joi.object().keys({
        id: Joi.number().min(1).required(),
        isim: Joi.string().min(1).max(25).optional(),
        lokasyon: Joi.string().min(1).max(25).optional()
    }),
}

export default schema;