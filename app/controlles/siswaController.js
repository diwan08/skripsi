require("dotenv").config();
const db    = require("../../database")

const siswaSchema = require("../validations/siswa")


module.exports = class siswaController {
    static async createSiswa(req, res) {
       try {
        const {error, value} = siswaSchema.validate(req.body);
        if (error) {
            return res.boom.badRequest(error.message)
        }
        const id = require("crypto").randomUUID()
        await db.transaction(async function(trx){
            await db("siswa")
                .insert({
                    id,
                    nis : value.nis,
                    nama: value.nama
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