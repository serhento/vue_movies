import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        movies: []
    },
    mutations:{
        SET_PRODUCTS_TO_STATE:(state, products)=>{
            state.movies = products
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return axios('https://floating-sierra-20135.herokuapp.com/api/movies', {
                method: "GET"
            })
                .then((products)=>{
                    commit('SET_PRODUCTS_TO_STATE', products.data.data);
                    return products;
                }).catch((error)=>{
                    console.log(error)
                    return error;
                })
        }},
    getters:{
        MOVIES(state){
            return state.movies;
        }
    }
});

export default store;