import express from 'express'
import mysql from 'mysql'
import cors from 'cors'




const app =express();
app.use(cors());
app.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mana"
})

app.get('/', (req,res)=>{
    const sql = "SELECT * FROM students";
    db.query(sql,(err, result)=>{
        if(err) return res.json({message:"error inside server"});
        return res.json(result);
    })
})

app.post('/students', (req,res)=>{
    const sql="INSERT INTO students(`FirstName`,`LastName`,`Location`,`Email`,`DOB`,`Education`,`About`) VALUES (?)";
    console.log(req.body)
    const values =[
        req.body.FirstName,
        req.body.LastName,
        req.body.Location,
        req.body.Email,
        req.body.DOB,
        req.body.Education,
        req.body.About
    ]
    db.query(sql,[values],(err,result)=>{
        if(err)return res.json(err);
        return res.json(result);
    })
})

app.get('/edit/:id', (req,res)=>{
    const sql = "SELECT * FROM students WHERE ID =?";
    const id=req.params.id;
    db.query(sql,[id],(err, result)=>{
        if(err) return res.json({message:"error inside server"});
        return res.json(result);
    })
})
app.put('/update/:id',(req,res)=>{
    const sql ='UPDATE students SET `FirstName`=?, `LastName`=?, `Location`=?, `Email`=?, `DOB`=?,`Education`=?, `About`=? WHERE ID=?'
    const id =req.params.id;
    db.query(sql,[req.body.FirstName, req.body.LastName, req.body.Location, req.body.Email, req.body.DOB, req.body.Education, req.body.About , id],(err,result)=>{
        if(err)return res.json({message:"error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const sql="DELETE FROM students WHERE ID =?";
    const id =req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err)return res.json({message:"error inside server"});
        return res.json(result);
    })
})


app.listen(8081, ()=>{
    console.log("listening");
})