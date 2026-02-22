import express from 'express'

const app = express()


app.get('/health',(req,res)=>{
    res.json({message:"api Working Fine 12"})
})

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`App is listen at Port ${PORT}`)
})