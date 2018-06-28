const express = require('express');
const router = express.Router();

module.exports = function (joraRepository) {

    router.route('/')
        .post(createTask)
        .get(list);

    router.route('/:id')
        .delete(deleteTask)

    async function createTask(req, res) {
        const result = await joraRepository.createTask(req.body);
        res.json(result);
    }

    async function list(req, res) {
        const list = await joraRepository.list();
        res.json(list);
    }

    async function deleteTask(req, res){
        await joraRepository.remove(req.params.id);
        res.sendStatus(204).end();
    }

    return router;
};