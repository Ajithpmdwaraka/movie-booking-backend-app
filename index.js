const express = require('express');
const app = express(); //express app object

app.get('/home', (req, res) => {
    return res.json({
        success: true
    })
})
app.listen(3000, () => {
    //This callback gets executed once we successfully start the server on the port
    console.log('listening on port 3000'); 
})