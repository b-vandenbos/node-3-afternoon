module.exports = {
    create: (req, res) => {
        const {name, description, price, image_url} = req.body;
        req.app.get('db')
        .create_product([name, description, price, image_url])
        .then ( () => {
            res.status(200).send('Product created!');
            console.log('A product was created!');
        })
        .catch(err => {
            res.status(500).send('There was an error creating the product!')
            console.log(`There was an error creating the product: ${err}`)
        })
    },

    getOne: (req, res) => {
        let {id} = req.params;
        console.log(id);
        id = Number(id);
        console.log(id);
        req.app.get('db')
        .read_product(id)
        .then( product => {
            res.status(200).send(product);
            console.log('One product is now showing');
        })
        .catch(err => {
            res.status(500).send('There was an error in loading the product!');
            console.log(`There was an error in loading the product: ${err}`)
        })
    },

    getAll: (req, res) => {
        req.app.get('db')
        .read_products()
        .then(products => {
            console.log('All products are now showing')
            res.status(200).send(products);
        })
        .catch(err => {
            res.status(500).send('There was an error in loading all the products!');
            console.log(`There was an error in loading all the products: ${err}`);
        })
    },

    update: (req, res) => {
        let {id} = req.params;
        let {desc} = req.query;
        req.app.get('db')
        .update_product([id, desc])
        .then( () => {
            res.status(200).send('Product was updated!');
            console.log('A product was updated');
        })
        .catch(err => {
            res.status(500).send('There was an error updating the product!')
            console.log(`There was an error updating the product: ${err}`)
        })
    },

    delete: (req, res) => {
        let {id} = req.params;
        req.app.get('db')
        .delete_product(id)
        .then( () => {
            res.status(200).send('Product was deleted!');
            console.log('A product was deleted');
        })
        .catch(err => {
            res.status(500).send('There was an error deleting the product!')
            console.log(`There was an error deleting the product: ${err}`)
        })
    }

}





