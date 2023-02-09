const express =require('express')
const app=express()
const cors =require('cors')
const mongoose =require('mongoose')
require('dotenv').config()


app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://team:team@test.cuuqfjn.mongodb.net/test3")
.then(()=>console.log('DB connected'))

  const port=3000;

  const exRUser=require('./route/user');


  app.use('/Ex',exRUser);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
