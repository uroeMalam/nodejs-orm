import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const jobs = await req.context.models.jobs.findAll()
        return res.send(jobs)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const jobs = await req.context.models.jobs.findOne({
            where:{job_id : req.params.id}
        })
        return res.send(jobs)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const jobs = await req.context.models.jobs.create({
            job_id : req.body.job_id,
            job_title : req.body.job_title,
            min_salary : req.body.min_salary,
            max_salary : req.body.max_salary
        })
        return res.send(jobs)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    try {
        const jobs = await req.context.models.jobs.update({
            job_title : req.body.job_title,
            min_salary : req.body.min_salary,
            max_salary : req.body.max_salary
        },{ returning : true , where:{job_id : req.params.id}})
        return res.send(jobs)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const jobs = await req.context.models.jobs.destroy({
            where:{job_id : req.params.id}
        })
        return res.send('delete '+jobs+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

// join / job_id
const join = async(req,res)=>{
    try {
        await sequelize.query('select * from employees join jobs on employees.job_id = jobs.job_id where jobs.job_id = :jobId',
        {replacements : {jobId : req.params.id},type : sequelize.QueryTypes.SELECT})
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