import productsModel from '../models/productsModel.js'


const productsControllers = {
    filter: async (req, res) => {
        const { minPrice, maxPrice} = req.query
        const filter = await productsModel.find({price: {$gte: minPrice, $lte: maxPrice}})
        res.send(filter)
    }
}

export default productsControllers