const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

// router.post('/', async (req, res) => {
//     try {
//         const {code, name, race, age, hp, mana} = req.body;
//         if(!code || !name || !hp || !mana) throw Error ("Falta enviar datos obligatorios")

        
//     } catch (error) {
//         return res.status(404).send(error.message)
//     }
// })

module.exports = router;
