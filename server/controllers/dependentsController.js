import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const dependents = await req.context.models.dependents.findAll()
        return res.send(dependents)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const dependents = await req.context.models.dependents.findOne({
            where:{dependent_id : req.params.id}
        })
        return res.send(dependents)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const dependents = await req.context.models.dependents.create({
            dependent_id : req.body.dependent_id,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            relationship : req.body.relationship,
            employee_id : req.body.employee_id,
        })
        return res.send(dependents)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    try {
        const dependents = await req.context.models.dependents.update({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            relationship : req.body.relationship,
            employee_id : req.body.employee_id,
        },{ returning : true , where:{dependent_id : req.params.id}})
        return res.send(dependents)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const dependents = await req.context.models.dependents.destroy({
            where:{dependent_id : req.params.id}
        })
        return res.send('delete '+dependents+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}


// join / employee_id
const join = async(req,res)=>{
    try {
        await sequelize.query('select * from dependents join employees on employees.employee_id = dependents.employee_id where dependents.employee_id = :employeeId',
        {replacements : {employeeId : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
    } catch (error) {
        return res.status(404).send(error)
    }
}



const newRoute = async(req,res)=>{
    try {
        const myData = await req.context.models.dependents.findAll({
            include: [{
                model: req.context.models.employees,
                as : "employees",
                right:true,
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