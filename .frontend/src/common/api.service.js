//import Vue from "vue";
//import axios from "axios";
//import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";
//import { inject } from 'vue';



const ApiService = {
  init() {
    this.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    this.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return this.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return this.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return this.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return this.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return this.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return this.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;