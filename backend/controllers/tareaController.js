const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler( async (req, res) => {
    res.status(200).json({'message':'Mostrar las tareas'})
})
const setTareas = asyncHandler( async(req, res) => {
    if(!req.body.text){
        // res.status(400).json({error: 'Favor de teclear una tarea'})
        res.status(400)
        throw new Error('Favor de teclear una tarea')
    }
    res.status(201).json({'message':'Tarea creada'})
})
const updateTareas = asyncHandler( async(req, res) => {
    res.status(200).json({'message':`La tarea: ${req.params.id} fue modificada`})
})
const deleteTareas = asyncHandler( async(req, res) => {
    res.status(200).json({'message':`La tarea: ${req.params.id} fue eliminada`})
})

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}