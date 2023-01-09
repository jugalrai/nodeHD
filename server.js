const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
    res.send('Hello World!')
})

app.get('/loop', (req, res) => {
    let a = []
    for (let i = 0; i < 10; i++) {
        a.push(i)
    }
    console.log(a)
    res.send(a)
})

app.get('/obj', (req, res) => {
    let o = [
        {
        id: 'jugal',
        age: '22'
        }, 
        { id: 'bipin',
        age: '23' 
        }]
    let b=[]
    for(let i = 0; i <o.length; i++) {
        b.push(o[i].id);
    }
    res.send(b)
})

app.get('/mod', (req, res) => {
    let c=[]
    for (let i = 1; i <10 ; i++) {
        if(i%2==0){
            c.push(i)
        }
    }
    res.send(c)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})