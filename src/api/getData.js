import api from './config';

class API {
  async getData(param) {
    try {
      let data = await api.get(param);
      console.log(data,"axios")
      return data;
    } catch (error) {
      console.log(err);
    }
  }


  async getOneAnime(param) {
    try {
      let data = await api.get(param);
      console.log(data,"axios")
      return data;
    } catch (error) {
      console.log(err);
    }
  }
}

export default new API();
