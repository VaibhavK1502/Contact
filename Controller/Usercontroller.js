var usermodel = require('../Model/Usermodel')
var login_status = 0;

exports.insert = async  (req, res) => {

    var data = await usermodel.create(req.body);

    res.status(200).json({
        // status:'insert.......ok',
        data    
    })
}
exports.getdata = async  (req, res) => {

    var data = await usermodel.find();

    res.status(200).json({        
        data    
    })
}