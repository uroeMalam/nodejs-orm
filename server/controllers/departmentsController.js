import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const departments = await req.context.models.departments.findAll()
        return res.send(departments)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const departments = await req.context.models.departments.findOne({
            where:{department_id : req.params.id}
        })
        return res.send(departments)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const departments = await req.context.models.departments.create({
            department_id : req.body.department_id,
            department_name : req.body.department_name,
            location_id : req.body.location_id
        })
        return res.send(departments)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    try {
        const departments = await req.context.models.departments.update({
            department_name : req.body.department_name,
            location_id : req.body.location_id
        },{ returning : true , where:{department_id : req.params.id}})
        return res.send(departments)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const departments = await req.context.models.departments.destroy({
            where:{department_id : req.params.id}
        })
        return res.send('delete '+departments+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

// join / id location (1700)
const join = async(req,res)=>{
    try {
        await sequelize.query('select * from departments join locations on locations.location_id = departments.location_id  where departments.location_id = :locationId',
        {replacements : {locationId : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const newRoute = async(req,res)=>{
    try {
        const myData = await req.context.models.departments.findAll({
            include: [{
                model: req.context.models.locations,
                as : "locations",
                left:true,
                require:true
            }]
        })
        return res.send(myData)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted,
    join,
    newRoute
}