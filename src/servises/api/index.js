import axios from "axios";

class Api {
  constructor() {
    this.http = axios.create({ baseURL: "http://localhost:3004" });
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  deleteJsonRecord(id) {
    //event.preventDefault();
    return this.http.delete("/posts/${id}").catch(error => {
      console.log(error);
    });
  }

  addJsonRecord(record) {}

  editJsonRecord(record) {}
}
export default Api.getInstance();
