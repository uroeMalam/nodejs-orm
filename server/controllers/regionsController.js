import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const region = await req.context.models.regions.findAll()
        return res.send(region)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const region = await req.context.models.regions.findOne({
            where:{region_id : req.params.id}
        })
        return res.send(region)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const region = await req.context.models.regions.create({
            region_name : req.body.region_name
        })
        return res.send(region)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    try {
        const region = await req.context.models.regions.update({
            region_name : req.body.region_name
        },{ returning : true , where:{region_id : req.params.id}})
        return res.send(region)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const region = await req.context.models.regions.destroy({
            where:{region_id : req.params.id}
        })
        return res.send('delete '+region+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        await sequelize.query('SELECT * from countries where region_id = :regionId',
        {replacements : {regionId : req.params.id},type : sequelize.QueryTypes.SELECT})
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
    querySQL
}