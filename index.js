const express = require('express');
const { readdirSync } = require('fs');
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
const { rows } = require('pg/lib/defaults'); 
var pool;
pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:wwwertyuiop12345@localhost/students'
})
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/addstudent', (req, res) => res.render('pages/index'));
app.get('/editstudent', (req, res) => res.render('pages/rectangle'))
app.get('/addpage', (req, res) => {
    res.redirect('/addstudent')
})
app.get('/',async(req,res) => {
    var getStudentQuery = `SELECT * FROM Student`;
    pool.query(getStudentQuery, (error, result) => {
        if (error)
          res.end(error);
        var results = {'rows':result.rows};
        res.render('pages/db', results);
    })
})

app.get('/:name',(req, res) => {
    var getOneStudentInformation = `SELECT * FROM Student WHERE name ='${req.params.name}'`
    pool.query(getOneStudentInformation, (err, result) => {
        if(!err){
            var oneResults = {'rows':result.rows }
            res.render('pages/rectangle', oneResults)
        }
        else{ console.log(err.message) }
    })
})
app.get('/detele/:id', (req, res) => {
    let deleteQuery = `delete from Student where id=${req.params.id}`
    pool.query(deleteQuery, (err, result)=>{
        if(!err){
            res.redirect('/')
        }
        else{ console.log(err.message) }
    })
});

app.post('/addstudent', async(req, res) => {
    var name = req.body.student_name;
    var weight = req.body.student_weight;
    var height = req.body.student_height;
    var hair_color = req.body.student_hair_color;
    var gpa = req.body.student_gpa;
    var newstudent = `INSERT INTO Student (name, weight, height, hair_color, gpa) VALUES ('${name}',${weight},${height},'${hair_color}',${gpa})`
    try{
        const result = await pool.query(newstudent)
        res.redirect('/')
    }catch (error){
        res.end(error)
    }
})

app.post('/editstudent/:id', async(req, res) => {
    var name1 = req.body.student_name1;
    var weight1 = req.body.student_weight1;
    var height1 = req.body.student_height1;
    var hair_color1 = req.body.student_hair_color1;
    var gpa1 = req.body.student_gpa1;
    var editInformation = `UPDATE Student SET name = '${name1}', weight = ${weight1}, height = ${height1}, hair_color = '${hair_color1}', gpa = ${gpa1} WHERE id =${req.params.id}`
    try{
            const results = await pool.query(editInformation);
            res.redirect('/')
        }
        catch(error) { console.log(err.message) }
   
    
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
