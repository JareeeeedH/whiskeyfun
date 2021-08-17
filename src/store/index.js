import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

let api = 'https://raw.githubusercontent.com/JareeeeedH/fundata/master/WhiskyFun.json';


let getLS = function(){
  let lsData =   JSON.parse(window.localStorage.getItem('wineRecord')) || [];
  return lsData;
};

let saveLS = function(data){

  window.localStorage.setItem('wineRecord', JSON.stringify(data))

};

// let setLS = function(){

//   let datas = getLS();
//   let dataToAdd = [{
//     "id": 7064,
//     "mainTitle": "Demerara 23 yo 1989/2012",
//     "subTitle": "(45%, Rum Nation, Guyana)",
//     "imgSrc": "https://raw.githubusercontent.com/JareeeeedH/fundata/master/whiskyfun/D/Demerara-23-yo-1989-Rum-Nation.jpg",
//     "points": null,
//     "SGP": "SGP:663",
//     "scores": "SGP:663 - around 87 points",
//   }]
//   window.localStorage.setItem('wineRecord', JSON.stringify(dataToAdd))

// };


export default new Vuex.Store({
  state: {
    funData: [],
    lovedList: [],
    userNmae: '',
  },

  actions:{
    GET_JSON_DATA(context){

      axios.get(api).then((response) => {
        context.commit('SET_DATA', response.data)
      })

    },    

    GET_LOCAL_DATA(context){
      let localData = getLS();
      context.commit('SET_LOCAL_DATA',localData)
    },

    ADD_LOVED_LIST(context, playload){

      let localData = getLS();
      localData.push(playload);
      context.commit('SET_LOCAL_DATA',localData);
    },

    DEL_LOVED_LIST(context, playload){

      let localData = getLS();

      let newLovedList = localData.filter((item)=>{
        return item.id !== playload
      })

      context.commit('SET_LOCAL_DATA',newLovedList);

    },

  },

  mutations:{
    SET_DATA(state, playload){
      state.funData = playload;
      console.log('data have been saved');
    },

    SET_LOCAL_DATA(state, playload){
      state.lovedList = playload;
      console.log(playload)

      saveLS(playload);
      console.log('commit!')
    },


  },

  getters:{


    dataList(state){

      let srcRoot = 'https://raw.githubusercontent.com/JareeeeedH/fundata/master/whiskyfun/';
      let filterList = [];

      state.funData.forEach((item)=>{

        // imgSrc
        let filePath = item.IMAGE_PATH.split('/')[1].split('')[0];
        let imgPath = item.IMAGE_PATH.split('/')[1];
        let imgSrc = srcRoot + filePath + '/' + imgPath;

        //Title
        let name = item.NAME.split(' (');
        let mainTitle = name[0];
        let subTitle = '(' + name[1];

        // Score
        let score = item.SCORE;

        let scoreSplit = item.SCORE.split(' - ');
        let SGP = scoreSplit[0];
        let points = scoreSplit[1];

        let eachItem = {
          SGP,
          points,
          mainTitle,
          subTitle,
          imgSrc,
          score,
          note: item.NOTE,
          id: item.id,
        };
        filterList.push(eachItem);
      });

      return filterList;



    },

  },

})
