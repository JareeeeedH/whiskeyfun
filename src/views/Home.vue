<template>
  <div class="about">
    <h1>Whisky Fun</h1>

    <!-- 上方搜尋欄 -->
    <div class="container-fluid mb-3">
      <div class="row">
        <div class="col-md-4">
          <div
            class="d-flex justify-content-between align-items-center bg-light"
          >
            <label
              for="titleInput"
              class="px-3 mb-0 text-primary d-flex align-items-center text-barSecond"
            >
              <i class="fas fa-search"></i>
            </label>

            <input
              placeholder="請搜尋名稱.."
              @keyup.enter="search"
            　v-model="searchContent"
              id="titleInput"
              style="border:none; outline:none; background-color: transparent;"
              class="w-100 p-2"
            />
          </div>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-md-4">
          <div
            class="d-flex justify-content-between align-items-center bg-light"
          >
            <label
              for="pointsInput"
              class="px-3 mb-0 text-primary d-flex align-items-center text-barSecond"
            >
              <i class="fas fa-search"></i>
            </label>

            <input
              type="number"
              placeholder="請搜尋分數.."
              @keyup.enter="search"
              　v-model="searchContent_points"
              id="pointsInput"
              style="border:none; outline:none; background-color: transparent;"
              class="w-100 p-2"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <button class="btn btn-primary" @click="search">
            Go!
          </button>
        </div>

        <div class="col-6">
          <div>
            <div v-if="matched_Title" style="text-align:left" class="h3">
              名稱: {{ matched_Title }}
            </div>
            <div v-if="matched_Points" style="text-align:left" class="h3">
              分數: {{ matched_Points }}
            </div>
          </div>
        </div>

        <div class="col-md-4 margin-left-auto">
          <div style="text-align:right">
            <h1>共有{{ this.rendering.length}}筆搜尋</h1>
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-12" v-for="item in rendering" :key='item.id'>
          <div class="card">
            <div class="title d-flex flex-column">
              <h1>
                {{ item.mainTitle }} <button @click='addToLocalStorage(item)' class='addBtn'>RECORD</button> 
              </h1>
              <h1>{{ item.subTitle }}</h1>
            </div>

            <div class="row p-3">
              <div class="col-md-2 d-flex flex-column justify-content-center align-items-center">
                <img v-lazy="item.imgSrc" />
                <p class="score">

                  {{ item.scores}}
                  <!-- points:{{ item.points }}
                  <br>
                  {{ item.SGP }} -->
                </p>

                <button @click='openModal(item.mainTitle, item.NOTE)' type="button" class="d-md-none btn btn-primary">
                  查看評論
                </button>

              </div>

              <div class="col-md-10 d-none d-md-block">
                <p class="note">{{ item.NOTE }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title bg-Main" id="exampleModalLabel">{{modalTitle}}</h1>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>

          <div class="modal-body modealText">
            {{ modalNote}}
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>


<script>
// import $ from 'jquery'


export default {
   data(){
    return {
      name: 'whiskyFun',
      searchContent:'',
      searchContent_points:'',

      matched_Points: null,
      matched_Title: null,

      modalTitle:'',
      modalNote:'',

      rendering: [],
    }
  },

  computed:{
    funDataList(){

      return this.$store.getters.dataList.map( (item) =>{
        
        let temp={
          id: item.id,
          mainTitle: item.mainTitle,
          subTitle: item.subTitle,
          imgSrc: item.imgSrc,
          points: parseInt(item.points),
          SGP: item.SGP,
          scores: item.score,
          NOTE: item.note,
          
        };
        return temp;
      })
    },

  },

  methods:{
    search(){

       // 兩個空白、return
       if (!this.searchContent.trim() && !this.searchContent_points) {
        console.log("兩個空白: StopSearching");
        alert("請搜尋名稱或者分數..");
        return;
      }

      // 只搜尋分數、
      else if (!this.searchContent.trim() && this.searchContent_points) {
        this.matched_Points = null;
        this.matched_Title = null;
        this.matched_Points = this.searchContent_points;
        let filterList = [];

        this.funDataList.forEach( (item) =>{
          if(Number(item.points) == Number(this.searchContent_points)){
            filterList.push(item)
          }
        })
        this.rendering = filterList;
      }

      // 只搜名稱、
      else if (this.searchContent.trim() && !this.searchContent_points) {
        this.matched_Points = null;
        this.matched_Title = null;

        this.matched_Points = null;
        this.matched_Title = this.searchContent;
        let filterList = [];

        this.funDataList.forEach( (item) =>{

          let temp = item.mainTitle.toLowerCase();

          if(temp.indexOf(this.searchContent.toLowerCase()) != -1){
            filterList.push(item)
          }
        })

        this.rendering = filterList;

      }

      // 搜名稱、與分數
      else if (this.searchContent.trim() && this.searchContent_points) {
        this.matched_Points = null;
        this.matched_Title = null;

        this.matched_Points = this.searchContent_points;
        this.matched_Title = this.searchContent;
        let filterList = [];

        this.funDataList.forEach( (item) =>{

          let temp = item.mainTitle.toLowerCase();

          if(temp.indexOf(this.searchContent.toLowerCase()) != -1 && Number(item.points) == Number(this.searchContent_points)){

            filterList.push(item)

          }
        })
        this.rendering = filterList;
      }
    },

    // 隨機取五個。
    getRandom(){
      
      let randomItems = [];

      for( let i=0; i< 5; i++){
        let ranNumber = Math.floor(Math.random()*this.funDataList.length);
        randomItems.push(this.funDataList[ranNumber])
      }
      this.rendering = randomItems;
    },

    openModal(title, note){
      this.modalTitle = title;
      this.modalNote = note;
      $('#exampleModal').modal('show');
    },
    addToLocalStorage(item){
      this.$store.dispatch('ADD_LOVED_LIST', item);
      alert('已加入')
    }
  },

  created(){
    // this.$store.dispatch('GET_LOCAL_DATA');

    this.$store.dispatch("GET_JSON_DATA");

    setTimeout( () =>{
      this.getRandom();
    }, 1500)

  },

};
</script>

<style>
* {
  /* font-family: "Roboto", sans-serif; */
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

.bg-Main{
 background-color: #669ccc;
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

.modealText{
  font-size: 20px;
  font-weight: bolder;
  text-align: left
}

.score {
  font-size: 25px;
  font-weight: bolder;
  margin-top: 10px;
}

img:hover {
  transform: scale(2);
  transition: 0.2s;
}

.addBtn{
  border:none;
  text-decoration: none;
  border-radius: 200px;
  font-size: 0.75rem;
  padding: 5px;
  background: white;
}
.addBtn:hover{
  background: green;
  color: white;
}
</style>
