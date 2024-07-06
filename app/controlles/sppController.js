require("dotenv").config;
const db    = require("../../database");

// schema validation 
const sppSchema = require("../validations/spp");

module.exports = class sppController {
    static async create(req, res) {
        try {
            const { value, error } = sppSchema.validate(req.body);
            if (error) {
                return res.boom.badData(error.message)
            }
            const id = require("crypto").randomUUID();

            await db.transaction(async function(trx) {
                await db("spp")
                    .insert({
                        id,
                        tahun: value.tahun,
                        nominal: value.nominal
                    })
                    .transacting(trx)
            })
            return res.status(201).json({
                success : true,
                message: "spp successfully retrieved"
            })
        } catch (error) {
            return res.boom.badRequest(error)
        }
    }
}
