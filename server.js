const express = require('express');
const app = express();

app.use(express.static('build'))

app.listen(4000,()=>{
    console.log('Server is running on 4000')
})