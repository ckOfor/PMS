module.exports = (app, db) => {
  // CRUD
  app.get('/api/all', (req, res) => {
    db.Item.findAll({}).then((result) => {
      res.json(result)
    })
  })
  app.post('/api/new', (req, res) => {
    db.Item.create({
      name: req.body.name,
      noOfMale: req.body.noOfFemale,
      noOfFemale: req.body.noOfFemale
    })
    .then((result) => {
      res.json(result)
    })
  })
  app.put('/api/update/:id', (req, res) => {
    db.Item.update({
      name: req.body.name
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((result) => {
      console.log(result)
      res.json(result)
    })
  })
  app.delete('/api/delete/:id', (req, res) => {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      console.log(result)
      res.json(result)
    })
  })
}
