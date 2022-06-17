import dotenv from "dotenv"
import express from "express"
dotenv.config()


const Pool = require('pg').Pool;
const pool = new Pool({
    host : "localhost",
    user : "postgres",
    password  : "root",
    database : "HR",
    port : 5432
})

const app = express()
app.use(express.json())

const port = process.env.PORT || 3003

app.listen(port,()=>{console.log('Server listening on port '+port)})



// root
app.get('/',(req,res)=> {
    res.setHeader('Content-Type','text/plain')
    res.end('Hello gan')
})



// region
app.get('/api/regions',(req,res)=>{
    pool.query('select * from regions',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/regions/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from regions where region_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/regions/',(req,res)=>{
    const {region_id,region_name} = req.body
    pool.query('insert into regions (region_id,region_name) values ($1,$2)',
    [region_id,region_name],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/regions/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    pool.query("update regions set region_name=$1 where region_id=$2",
    [name,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/regions/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from regions where region_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// countries
app.get('/api/countries',(req,res)=>{
    pool.query('select * from countries',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/countries/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from countries where country_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/countries/',(req,res)=>{
    const {country_id,country_name,region_id} = req.body
    pool.query('insert into countries (country_id,country_name,region_id) values ($1,$2,$3)',
    [country_id,country_name,region_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/countries/:id',(req,res)=>{
    const {id} = req.params
    const {country_name,region_id} = req.body
    pool.query("update countries set country_name=$1, region_id=$2 where country_id=$3",
    [country_name,region_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/countries/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from countries where country_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// departments
app.get('/api/departments',(req,res)=>{
    pool.query('select * from departments',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/departments/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from departments where department_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/departments/',(req,res)=>{
    const {department_id,department_name,location_id} = req.body
    pool.query('insert into departments (department_id,department_name,location_id) values ($1,$2,$3)',
    [department_id,department_name,location_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/departments/:id',(req,res)=>{
    const {id} = req.params
    const {department_name,location_id} = req.body
    pool.query("update departments set department_name=$1, location_id=$2 where department_id=$3",
    [department_name,location_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/departments/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from departments where department_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// dependents
app.get('/api/dependents',(req,res)=>{
    pool.query('select * from dependents',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/dependents/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from dependents where dependent_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/dependents/',(req,res)=>{
    const {dependent_id,first_name,last_name,relationship,employee_id} = req.body
    pool.query('insert into dependents (dependent_id,first_name,last_name,relationship,employee_id) values ($1,$2,$3,$4,$5)',
    [dependent_id,first_name,last_name,relationship,employee_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/dependents/:id',(req,res)=>{
    const {id} = req.params
    const {first_name,last_name,relationship,employee_id} = req.body
    pool.query("update dependents set first_name=$1,last_name=$2,relationship=$3,employee_id=$4 where dependent_id=$5",
    [first_name,last_name,relationship,employee_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/dependents/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from dependents where dependent_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// employees
app.get('/api/employees',(req,res)=>{
    pool.query('select * from employees',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/employees/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from employees where employee_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/employees/',(req,res)=>{
    const {employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id} = req.body
    pool.query('insert into employees (employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
    [employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/employees/:id',(req,res)=>{
    const {id} = req.params
    const {first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id} = req.body
    pool.query("update employees set first_name=$1,last_name=$2,email=$3,phone_number=$4,hire_date=$5,job_id=$6,salary=$7,manager_id=$8,department_id=$9 where employee_id=$10",
    [first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/employees/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from employees where employee_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// jobs
app.get('/api/jobs',(req,res)=>{
    pool.query('select * from jobs',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/jobs/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from jobs where job_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/jobs/',(req,res)=>{
    const {job_id,job_title,min_salary,max_salary} = req.body
    pool.query('insert into jobs (job_id,job_title,min_salary,max_salary) values ($1,$2,$3,$4)',
    [job_id,job_title,min_salary,max_salary],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/jobs/:id',(req,res)=>{
    const {id} = req.params
    const {job_title,min_salary,max_salary} = req.body
    pool.query("update jobs set job_title=$1,min_salary=$2,max_salary=$3 where job_id=$4",
    [job_title,min_salary,max_salary,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/jobs/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from jobs where job_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// locations
app.get('/api/locations',(req,res)=>{
    pool.query('select * from locations',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/locations/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from locations where location_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/locations/',(req,res)=>{
    const {location_id,street_address,postal_code,city,state_province,country_id} = req.body
    pool.query('insert into locations (location_id,street_address,postal_code,city,state_province,country_id) values ($1,$2,$3,$4,$5,$6)',
    [location_id,street_address,postal_code,city,state_province,country_id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/locations/:id',(req,res)=>{
    const {id} = req.params
    const {street_address,postal_code,city,state_province,country_id} = req.body
    pool.query("update locations set street_address=$1,postal_code=$2,city=$3,state_province=$4,country_id=$5 where location_id=$6",
    [street_address,postal_code,city,state_province,country_id,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/locations/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from locations where location_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// project_assignment
app.get('/api/project_assignment',(req,res)=>{
    pool.query('select * from project_assignment',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/project_assignment/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from project_assignment where pras_proj_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/project_assignment/',(req,res)=>{
    const {pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status} = req.body
    pool.query('insert into project_assignment (pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) values ($1,$2,$3,$4,$5)',
    [pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/project_assignment/:id',(req,res)=>{
    const {id} = req.params
    const {pras_employee_id,pras_startdate,pras_enddate,pras_status} = req.body
    pool.query("update project_assignment set pras_employee_id=$1,pras_startdate=$2,pras_enddate=$3,pras_status=$4 where pras_proj_id=$5",
    [pras_employee_id,pras_startdate,pras_enddate,pras_status,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/project_assignment/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from project_assignment where pras_proj_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})



// projects
app.get('/api/projects',(req,res)=>{
    pool.query('select * from projects',
    [],
    (error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/projects/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from projects where proj_id = $1',
    [id],
    (error,result)=>{
        if(error){
        throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/projects/',(req,res)=>{
    const {proj_id,proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr} = req.body
    pool.query('insert into projects (proj_id,proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
    [proj_id,proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/projects/:id',(req,res)=>{
    const {id} = req.params
    const {proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr} = req.body
    pool.query("update projects set proj_name=$1,proj_createdon=$2,proj_duedate=$3,proj_cust_name=$4,proj_description=$5,proj_status=$6,proj_amount=$7,proj_account_mgr=$8 where proj_id=$9",
    [proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_description,proj_status,proj_amount,proj_account_mgr,id],
    (error,result) =>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})

app.delete('/api/projects/:id',(req,res)=>{
    const {id} = req.params
    pool.query('delete from projects where proj_id = $1',
    [id],
    (error,result)=>{
        if (error) {
            throw error;
        }
        res.status(200).json(result.rowCount)
    })
})