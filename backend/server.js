
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';



const app=express();


const port=process.env.PORT;




// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// })

app.get('/api/details',(req,res)=>{
    const people = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 },
        { id: 4, name: 'David', age: 40 },
        { id: 5, name: 'Eve', age: 28 }
    ];
    res.send(people);
})



app.listen(port,()=>{
    console.log(`Server is running on  ${port}`);
});