const { Client } = require('pg');
const express = require('express');

const app = express();

const client = new Client({
    user: "cooe",
    password: "password123",
    host: "18.222.158.243",
    port: 5432,
    database: "cooe"
})

app.listen(3000)

client.connect()

app.get('/cooe/:id?:idd', async (req, res) => {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    try{
        //to find common teeups among two users
        const {rows} = await client.query('SELECT a.teeupid FROM cooe.teeup_users a JOIN cooe.teeup_users b USING (teeupid) WHERE a.usersid = $1 AND b.usersid = $2', [id1, id2])
        res.json(rows)
        //res.send({id1, id2})
    }
    catch(e){
        console.log(e)
    }
})


