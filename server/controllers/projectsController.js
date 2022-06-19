import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const projects = await req.context.models.projects.findAll()
        return res.send(projects)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const projects = await req.context.models.projects.findOne({
            where:{proj_id : req.params.id}
        })
        return res.send(projects)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const projects = await req.context.models.projects.create({
            proj_id : req.body.proj_id,
            proj_name : req.body.proj_name,
            proj_createdon : req.body.proj_createdon,
            proj_duedate : req.body.proj_duedate,
            proj_cust_name : req.body.proj_cust_name,
            proj_description : req.body.proj_description,
            proj_status : req.body.proj_status,
            proj_amount : req.body.proj_amount,
            proj_account_mgr : req.body.proj_account_mgr,
        })
        return res.send(projects)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    try {
        const projects = await req.context.models.projects.update({
            proj_name : req.body.proj_name,
            proj_createdon : req.body.proj_createdon,
            proj_duedate : req.body.proj_duedate,
            proj_cust_name : req.body.proj_cust_name,
            proj_description : req.body.proj_description,
            proj_status : req.body.proj_status,
            proj_amount : req.body.proj_amount,
            proj_account_mgr : req.body.proj_account_mgr,
        },{ returning : true , where:{proj_id : req.params.id}})
        return res.send(projects)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const projects = await req.context.models.projects.destroy({
            where:{proj_id : req.params.id}
        })
        return res.send('delete '+projects+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

// join / employee_id
const join = async(req,res)=>{
    try {
        await sequelize.query('select * from projects join employees on projects.proj_account_mgr = employees.employee_id where employees.employee_id = :employeeId',
        {replacements : {employeeId : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
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
    join
}