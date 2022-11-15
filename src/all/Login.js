

async function run (){

    try{
        const serviceCollection = client.db('serviceReview').collection('services');
        const reviewCollection = client.db('serviceReview').collection('reviews');
     

        /////////////////
        app.post('/addservices' , async (req, res)=>{
            const services = req.body ;
             const result = await serviceCollection.insertOne(services);
            res.send(result);
        })

        app.get('/services', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query).sort({ts: -1});
            const services = await cursor.limit(3).toArray();
            res.send(services);
        });

        app.get('/allservices', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        app.get('/services/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id : ObjectId(id)};
            const service = await serviceCollection.findOne(query);
            res.send(service);
        })

///////////////////////

        app.get('/orders', async (req, res) => {
            let query = {};
            if (req.query.email) {
                query = {
                    email: req.query.email
                }
            }
            const cursor = reviewCollection.find(query).sort({ts:-1});
            const orders = await cursor.toArray();
            res.send(orders);
        });

        app.post('/orders' , async (req, res)=>{
            const order = req.body ;
             const result = await reviewCollection.insertOne(order);
            res.send(result);
        })

        app.patch('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const status = req.body.status
            const query = { _id: ObjectId(id) }
            const updatedDoc = {
                $set:{
                    status: status
                }
            }
            const result = await reviewCollection.updateOne(query, updatedDoc);
            res.send(result);
        })

        app.delete('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await reviewCollection.deleteOne(query);
            res.send(result);
        })


    }
    finally{


    }

}

run().catch(err => console.log(err));

