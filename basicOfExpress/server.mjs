import express from 'express';
import path from 'path';
import userRoute from './Routes/userRoute.mjs';

import { connectToMongoDB } from './connection/connection.mjs';
connectToMongoDB();

const app = express();
const port = 3000;

app.use(express.json())

const dirname = path.resolve();

console.log(dirname)

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// app.get('/user',(req,res)=>{
//   res.send({
//     firstName:"Arif",
//     lastName: "Khan",
//     age: 34,
//     phone: "03248385784"
//   })
// })


app.get('/employees',(req,res)=>{

  res.send([
    {
      employeeName: "Arif",
      employeeDesignation: "Manager",
      employeeSalary: 340000
  },
   {
      employeeName: "Zahid",
      employeeDesignation: "Admin Officer",
      employeeSalary: 40000
  }
])

})


app.get('/image',(req,res)=>{
  res.sendFile(`${dirname}/images/1.jpg`)
})

app.get('/school',(req,res)=>{
  res.json({
    schoolName: "LadyBird School",
    location:"Block M, North Nazimabad Karachi",
    phone: "+9234243243342"
  })
})

app.get('/download',(req,res)=>{
  res.download('./software/VSCode.exe');
})

app.get('/redirect',(req,res)=>{
  res.redirect('https://code.visualstudio.com/download?_exp_download=d53503e735')
})

app.get('/status',(req,res)=>{
  res.status(404).send('Not found!');
})
app.get('/status2',(req,res)=>{
  res.sendStatus(403)
})





app.use("/api",userRoute)






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});