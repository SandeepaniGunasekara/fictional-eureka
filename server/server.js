const app = require('express')()

app.get('/', (request, response)=>{
    const id = request.param('id')
    response.status(200).send('get request for '+id)
})

app.listen(5000,()=>{
    console.log('server started on '+5000)
})