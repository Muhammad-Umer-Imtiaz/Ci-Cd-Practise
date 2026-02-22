import express from 'express'

const app = express()


app.get('/health',(req,res)=>{
    res.json({message:"api WOrking Fine"})
})

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`App is listen at Port ${PORT}`)
})