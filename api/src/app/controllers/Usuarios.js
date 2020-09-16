module.exports = {
  async index(req, res) {
    const content = ['banana', 'laranja'];
    return res.render("list", {
      layout: "default",
      title: "Lista",
      dados: content,
    });
  },

  async store(req, res) {
    return res.render("register", { layout: "default", title: "Cadastro" });
  },

  async storeRegister(req, res) {
    const {name, email, sobrenome, idade, cpf, rg, endereço, rua, cidade, estado } = req.body
    db.collection('data').save({name, email, sobrenome, idade, cpf, rg, endereço, rua, cidade, estado}, (err, result) => {
      if (err) return console.log(err)
  
      console.log('Salvo no Banco de Dados')
      res.redirect('/api/show')
    })
  },

  async delete(req, res) {
    return res.send({ok: true})
  },
  async show(req, res) {
    db.collection('data').find().toArray((err, results) => {
      if (err) return console.log(err)
      res.render('list', { dados: results })
    })
  },
  async update(req, res) {
    return res.send({ok: true})
  }

 
}