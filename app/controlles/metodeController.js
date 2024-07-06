require("dotenv").config();
const db    = require("../../database")

const metodeSchema = require("../validations/metode")


module.exports = class siswaController {
    static async createData(req, res) {
       try {
        const {error, value} = metodeSchema.validate(req.body);
        if (error) {
            return res.boom.badRequest(error.message)
        }
        const id = require("crypto").randomUUID()
        await db.transaction(async function(trx){
            await db("metode")
                .insert({
                    id,
                    metode_pembayaran : value.metode_pembayaran,
                })
                .catch(err => {
                    return res.boom.badRequest(err)
                })
        })
        return res.json({
            success : true,
            message: "data created successfully"
        })
       } catch (error) {
        return res.boom.badRequest(error)
       } 
    }
}