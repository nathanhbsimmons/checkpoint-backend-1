

    module.exports.list = function list(req, res) {
        let rawData    
        const fs = require('fs')
        
        fs.readFile("./data.csv", 'utf8', function (err,data) {
             if (err) {
               return console.log(err);
             }
             rawData = data.split(",")
             return res.json(rawData[6])
            });
      };
//   module.exports.show = function show(req, res) {
//     return OrderModel.findById(req.params.id).exec().then(order => res.json(order)); 
//   };
//   module.exports.create = function create(req, res) {
//     const newOrder = new OrderModel(req.body);
//     newOrder.save().then(savedOrder => res.json(savedOrder));
//   };
  // module.exports.update = function update(request, response) {
  //   return response.json({theId: request.params.id});
  // }
  // module.exports.remove = function remove(request, response) {
  //   return response.json({});
  // }