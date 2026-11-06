export const userData = (req,res)=>{
    res.send({
        firstName: "Arif",
        lastName: "Khan",
        email: "arif@gmail.com"
    })
}

export const userAdd = (req,res)=>{


   const {userName, age, email} = req.body;

   console.log(userName,email,age)

res.send({
    userName,email,age
})


}



export const singleUser = (req,res)=>{
//    const {id} =  req.params;
const {id} = req.query;

   res.send({id});
}











