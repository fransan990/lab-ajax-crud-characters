

class APIHandler {
  constructor(baseURL) {

    this.axiosApp = axios.create({ baseURL })
  }



  getFullList() {
    return this.axiosApp.get('/characters')

  }

  getOneRegister(valor) {
    return this.axiosApp.get(`/characters/${valor}`)



  }

  createOneRegister(pi) {
    return this.axiosApp.post('/characters', pi)



  }

  updateOneRegister(valor) {
    return this.axiosApp.put(`/characters/${valor.id}`, valor)


  }

  deleteOneRegister(valor) {

    return this.axiosApp.delete(`/characters/${valor}`)

  }
}


