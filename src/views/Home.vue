<template>
  <div class="about">

    <h1 style='color:#669ccc; font-weight: 800;' class="m-3">{{ name }}</h1>

    <!-- 上方搜尋欄 -->
    <div class="container-fluid mb-3">
      
      <div class="row">
        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center bg-light">
            <label
              for="titleInput"
              class="px-3 mb-0 text-primary d-flex align-items-center text-barSecond"
            >
              <i class="fas fa-search"></i>
            </label>

            <input
              placeholder="請搜尋名稱.."
              @keyup.enter='search'
            　v-model="searchContent"
              id="titleInput"
              style="border:none; outline:none; background-color: transparent;"
              class="w-100 p-2"
            />
            <button
              class="btn btn-light rounded-0 py-2"
            　@click="delText"
              v-if="searchContent">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center bg-light">
          <label
            for="pointsInput"
            class="px-3 mb-0 text-primary d-flex align-items-center text-barSecond"
          >
            <i class="fas fa-search"></i>
          </label>

            <input
              type='number'
              placeholder="請搜尋分數.."
              @keyup.enter='search'
            　v-model="searchContent_points"
              id="pointsInput"
              style="border:none; outline:none; background-color: transparent;"
              class="w-100 p-2"
            />
            <button
              class="btn btn-light rounded-0 py-2"
              　@click="delText_points"
              v-if="searchContent_points"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="col-md-2">

          <button class="btn btn-primary" @click="search">Go! 
            <i class="fas fa-spinner fa-spin" v-if="loading==true"></i>
          </button>

        </div>

        <div class="col-6">

          <div>
            <div v-if='matched_Title' style='text-align:left' class='h3'>
              名稱: {{matched_Title}}
            </div>
            <div  v-if='matched_Points' style='text-align:left' class='h3'>
              分數: {{ matched_Points}}
            </div>
          </div>

        </div>


        <div class="col-md-4 margin-left-auto">
          <div style='text-align:right'>
            <h1>共有{{rendering.length}}筆搜尋</h1>
          </div>
        </div>

      </div>

    </div>

    <div
      class="container-fluid"
    >
      <div class="row">
        <div class="col-md-12 col-12" v-for="item in rendering">
          <div class="card">
            <div class="title d-flex flex-column">
              <h1>{{ item.nameTitle[0] }}</h1>
              <h1>({{ item.nameTitle[1] }}</h1>
            </div>

            <div class="row p-3">
              <div
                class="col-md-2 d-flex flex-column justify-content-center align-items-center"
              >
                <img v-lazy="item.img" />
                <p class="score">
                  {{ item.ScoreTitle[0] }} - {{ item.ScoreTitle[1] }}
                </p>
              </div>

              <div class="col-md-10">
                <p class="note">{{ item.NOTE }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld.vue";
import products from "../assets/WhiskyFun.json";

export default {
  name: "Home",
  components: { HelloWorld },
  data() {
    return {
      items: Object.values(products),
      name: "Whisky Fun",
      searchContent: "",
      searchContent_points: "",

      matched_Points: null,
      matched_Title: null,

      rendering: [],

      loading: false,
    };
  },
  methods: {
    delText() {
      this.searchContent = "";
    },
    delText_points() {
      this.searchContent_points = "";
    },

    search() {

      // 兩個空白、return
      if(!this.searchContent.trim() && !this.searchContent_points){
        console.log('兩個空白: StopSearching')
        alert('請搜尋名稱或者分數..')
        return;
      }

      // 只搜尋分數、
      else if(!this.searchContent.trim() && this.searchContent_points){

        this.matched_Points = null;
        this.matched_Title = null; 


        this.matched_Points = this.searchContent_points;
        this.loading = true;

        let resultObjList = [];
        this.items.forEach((item, index)=>{

        let points = parseInt(item.SCORE.split(" - ")[1]);
        if(points == Number(this.searchContent_points)){
          resultObjList.push(item)
        }

      })

      let targetList = [];
    
      for(let i=0; i<resultObjList.length; i++){

      let img =null;
      // Name
      let NameSplit = resultObjList[i].NAME.split("(");
      // Score
      let ScoreSplit = resultObjList[i].SCORE.split(" - ");
      let Scorepoints = parseInt(resultObjList[i].SCORE.split(" - ")[1]);

        let eachData = {
          NAME: resultObjList[i].NAME,
          nameTitle: NameSplit,
          SCORE: resultObjList[i].SCORE,
          ScoreTitle: ScoreSplit,
          img:img,
          NOTE: resultObjList[i].NOTE,
          };

      targetList.push(eachData);

      };


      this.rendering = targetList;
      this.searchContent_points = '';

      // loading關閉
      setTimeout(() => {
         this.loading = false;
          console.log(this.loading)
          },10);
      console.log('搜分數')

      }
      
      //  只搜title; 
      // 3個字以上有圖片
      else if(this.searchContent.trim() && !this.searchContent_points){
        
      if(this.searchContent.trim().length >= 3){ 

        this.matched_Points = null;
        this.matched_Title = null; 
        
        this.matched_Title = this.searchContent;
        let vm = this;
        let resultObjList = [];

        for (let i = 0; i < this.items.length; i++) {

            let temp = this.items[i].NAME.toLowerCase();

            if (temp.indexOf(vm.searchContent.toLowerCase().trim()) != -1) {
              resultObjList.push(vm.items[i]);
            }
          };


        let targetList = [];
        for(let i=0; i<resultObjList.length; i++){

          let img =null;

          let imgUrl = resultObjList[i].IMAGE_PATH.split("/")[1];
          let imgFile = imgUrl.split("")[0];
          
          try {
            img = require(`../assets/whiskyfun/${imgFile}/${imgUrl}`)
          } catch (err) {
            img = require('../assets/error.jpg')
          }





          // Name
          let NameSplit = resultObjList[i].NAME.split("(");
          // Score
          let ScoreSplit = resultObjList[i].SCORE.split(" - ");
          let Scorepoints = parseInt(resultObjList[i].SCORE.split(" - ")[1]);

          let eachData = {
            NAME: resultObjList[i].NAME,
            nameTitle: NameSplit,
            SCORE: resultObjList[i].SCORE,
            ScoreTitle: ScoreSplit,
            img:img,
            NOTE: resultObjList[i].NOTE,
            };

          targetList.push(eachData);

        };

        this.rendering = targetList;
        this.searchContent = '';
        console.log('只搜Title; >= 3') 

      }
      else{

        this.matched_Points = null;
        this.matched_Title = null; 
        
        this.matched_Title = this.searchContent;
        let vm = this;
        let resultObjList = [];

        for (let i = 0; i < this.items.length; i++) {

            let temp = this.items[i].NAME.toLowerCase();

            if (temp.indexOf(vm.searchContent.toLowerCase().trim()) != -1) {
              resultObjList.push(vm.items[i]);
            }
          };


        let targetList = [];
        for(let i=0; i<resultObjList.length; i++){

          let img =null;
          // Name
          let NameSplit = resultObjList[i].NAME.split("(");
          // Score
          let ScoreSplit = resultObjList[i].SCORE.split(" - ");
          let Scorepoints = parseInt(resultObjList[i].SCORE.split(" - ")[1]);

          let eachData = {
            NAME: resultObjList[i].NAME,
            nameTitle: NameSplit,
            SCORE: resultObjList[i].SCORE,
            ScoreTitle: ScoreSplit,
            img:img,
            NOTE: resultObjList[i].NOTE,
            };

          targetList.push(eachData);

        };

        this.rendering = targetList;
        this.searchContent = '';
        console.log('只搜Title; < 3') 
      }

        

      }
      // 兩個都搜尋
      else if(this.searchContent.trim() && this.searchContent_points){
        let vm = this;


        this.matched_Points = this.searchContent_points;
        this.matched_Title = this.searchContent; 

        let resultObjList = [];
        this.items.forEach((item, index)=>{

        let points = parseInt(item.SCORE.split(" - ")[1]);
        let temp = item.NAME.toLowerCase();


        if (temp.indexOf(vm.searchContent.toLowerCase().trim()) != -1 && points == Number(this.searchContent_points)) {
          resultObjList.push(item);
        };

      })


      let targetList = [];
    
      for(let i=0; i<resultObjList.length; i++){



      let img =null;

      let imgUrl = resultObjList[i].IMAGE_PATH.split("/")[1];
      let imgFile = imgUrl.split("")[0];

      try {
        img = require(`../assets/whiskyfun/${imgFile}/${imgUrl}`)
      } catch (err) {
        img = require('../assets/loading.png')
      }


      
      // Name
      let NameSplit = resultObjList[i].NAME.split("(");
      // Score
      let ScoreSplit = resultObjList[i].SCORE.split(" - ");
      let Scorepoints = parseInt(resultObjList[i].SCORE.split(" - ")[1]);

        let eachData = {
          NAME: resultObjList[i].NAME,
          nameTitle: NameSplit,
          SCORE: resultObjList[i].SCORE,
          ScoreTitle: ScoreSplit,
          img:img,
          NOTE: resultObjList[i].NOTE,
          };

      targetList.push(eachData);

      };


      this.rendering = targetList;




        this.searchContent_points ='';
        this.searchContent = '';
        console.log('兩個都搜尋')
      }
      else{
        alert('搜尋無效')
      }
      

    },

    beginData(){
      let randomList = [];

      for(let i=0; i<3; i++){

        let randomNum = (parseInt(Math.random()* this.items.length));
        
        
        let imgUrl = this.items[randomNum].IMAGE_PATH.split("/")[1];
        let imgFile = imgUrl.split("")[0];
        let img =null;
        try {
          img = require(`../assets/whiskyfun/${imgFile}/${imgUrl}`)
        } catch (err) {
          img = require('../assets/loading.png')
        }


        // Name
        let NameSplit = this.items[randomNum].NAME.split("(");

        // Score
        let ScoreSplit = this.items[randomNum].SCORE.split(" - ");
        let Scorepoints = parseInt(this.items[randomNum].SCORE.split(" - ")[1]);

        let eachData = {
          NAME: this.items[randomNum].NAME,

          nameTitle: NameSplit,
          SCORE: this.items[randomNum].SCORE,
          ScoreTitle: ScoreSplit,
          img:img,
          NOTE: this.items[randomNum].NOTE,
        };

        randomList.push(eachData);


      };

      this.rendering = randomList



    },
  },

  created(){
    this.beginData();
  },


};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
.h1,
.h2,
.h3,
.h4,
.h5 {
  margin: 0;
}

.card {
  padding: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}

.card:hover {
  box-shadow: 0px 2px 10px rgba(0, 46, 161, 0.7);
}

.title {
  text-align: left;
  padding: 10px;
  color: black;
  background-color: #669ccc;
  display: flex;
  align-items: center;
}

.note {
  font-family: Helvetica;
  text-align: left;
  font-size: 25px;
  font-weight: 600;
  margin: 0;
}

.score {
  font-size: 25px;
  font-weight: bolder;
  margin-top: 10px;
}


img:hover{
  transform: scale(2);
  transition: 0.2s;
}

</style>

