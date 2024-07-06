require("dotenv").config()
const db = require("../../database");


// schema 
const kelasSchema = require("../validations/kelas")

module.exports = class kelasController {
    static async create(req, res) {
        try {
            const { error, value} = kelasSchema.validate(req.body)
            if (error) {
                return res.boom.badRequest(error.message)
            }

            const id = require("crypto").randomUUID()
            await db.transaction(async function(trx) {
                await db("kelas")
                    .insert({
                        id,
                        nama_kelas: value.nama_kelas
                    })
                    .transacting(trx)
            })
            return res.status(201).json({
                success: true,
                massage: "Data created"
            })
        } catch (error) {
            // return console.log(error);
            return res.boom.badRequest(error.massage)
        }
    }
}