const authen = {

    authenCustomers : (req, res, next) => {
        const param = req.params
        const query = req.query

        const { apikey } = query

            try {
                if(param === 'customers')
                res.status(200).send({
                    message: 'get customers successfully',
                    success: true
                })
                console.log(apikey)
                next()
            } catch (error) {
                res.status(403).send({
                    message: error.message,
                    data: null,
                    success: false
                })
            }
    }
    
}

export default authen