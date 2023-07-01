const express = require('express')
const app = express();
const puerto = 3333

app.get('/glucometer', (req, res) => {
  res.send('Backend de glucometro')
})

app.get('/glucometer/user', (req, res) => {
  res.json({
    name:"Carmen Cortés",
    Age: 65,
    Year_with_diabetes: 15
  })
})

app.get('/glucometer/user/:periodoId', (req, res) => {
  const { periodoId } = req.params;
  res.json({
    id: periodoId,
    name:"Carmen Cortés",
    Period: "March-2023",
    Average: 120
  })
})




app.listen(puerto, ()=>{
  console.log(`http://localhost:${puerto}`)
})
