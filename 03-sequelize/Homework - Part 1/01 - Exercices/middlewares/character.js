const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post('/', async (req, res) => {
    try {
        const {code, name, race, age, hp, mana} = req.body;
        if(!code || !name || !hp || !mana) throw Error ("Falta enviar datos obligatorios")

        const newCharacter = await Character.create (req.body)
        res.status (201).json(newCharacter)


    } catch (error) {
        return res.status(404).send(error.message)
    }
})

router.get('/', async (req, res) => {
    try {
        const {race, age} = req.query;

        const condition = {}
        const where ={}

        //* verifico si me llega uno o 2 query
        // where : {race}
        if(race) where.race = race
        //where: {race, age}
        if(age) where.age = age

        // {where: {race, age}}
        condition.race = where

        const characters = await Character.findAll(
            condition
        )


        res.status (201).json(characters)


    } catch (error) {
        return res.status(404).send(error.message)
    }
})



router.get('/:code', async (req, res) => {
    try {
        const {code} = req.params;

        const characterByPK= await Character.findByPk(code)

        if (!characterByPK) throw Error ("el codigo no corresponde a un personaje")

        res.status (201).json(characters)

    } catch (error) {
        return res.status(404).send(error.message)
    }
})


router.put('/:attribute', async (req, res) => {
    try {
        const {attribute} = req.params;
        const {value} = req.query;

        await Character.update({[attribute]: value}, {
            where:{
                [attribute]: null,  //si el atributo tiene valor de null se modifica
            }
        })                //modificar

        res.status (200).send('Personajes actualizados')

    } catch (error) {
        return res.status(404).send(error.message)
    }
})



module.exports = router;
