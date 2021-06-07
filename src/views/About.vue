<template>
  <div class="about">
    <h1 class="text-primary">{{ name }}</h1>

    <!-- 上方搜尋欄 -->
    <div class='container mb-3'>
      <div class="row">

        <div class="col-md-3">

          <div class="d-flex justify-content-between align-items-center bg-light">

            <label for="subicon" class="px-3 mb-0 text-primary d-flex align-items-center text-barSecond">
              <i class="fas fa-search"></i>
            </label>

            <input placeholder="請搜尋.." 　v-model='searchContent' id="subicon"
              style="border:none; outline:none; background-color: transparent;" class="w-100 p-2">
            <button class="btn btn-light rounded-0 py-2" 　@click='delText' v-if='searchContent'>
              <i class="fas fa-times"></i>
            </button>

          </div>

          <!-- <div class='suggestionsSection'>
            <li v-for='item in suggestions' @click='confirmStore(item)' v-if='item.item.name !==searchContent'>
              <i class="fas fa-search m-1"></i>
              {{item.item.name}}
            </li>
          </div> -->
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6"  v-for="item in DataFilter_two">

          <div class='card'>
            <div class='title'>{{ item.title }}</div>
            <h5 class='rate mb-0'>{{ item.rate }}</h5>
            <hr>

            <div class="imgBox">
              <img alt="Photo not found" :src="item.img" />
            </div>
            <hr>
            <div class="desc">
              <p>
                {{item.desc}}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import products from "../assets/db.json";

export default {
  name: "ProductList",
  data() {
    return {
      name: "Whiskey_Fun",
      // items: Object.values(products),
      searchContent: '',
    };
  },
  methods: {

    // 點擊刪除輸入框
    delText() {
      this.searchContent = ''
    },

    // suggestions欄位、點擊搜索商家
    // confirmStore(storeName) {

    //   this.searchContent = storeName.item.name;

    // },

  },

  // computed: {
  //   DataFilter() {
  //     let alldatas = [];

  //     this.items.forEach((item) => {
  //       let eachData = {
  //         title: item.title,
  //         rate: item.rate,
  //         img: require(`../assets/A/${item.img}`),
  //         desc: item.description,
  //       };

  //       alldatas.push(eachData);
  //     });

  //     return alldatas;
  //   },
  //   DataFilter_two() {

  //     let vm = this;
  //       let sugList = [];

  //       if (vm.searchContent == '') {
  //         return vm.DataFilter;

  //       } else {

  //         for (let i = 0; i < vm.DataFilter.length; i++) {

  //           var temp = '';
  //           temp = vm.DataFilter[i].title;


  //           if (temp.indexOf(vm.searchContent) != -1) {

  //             sugList.push(vm.DataFilter[i]);

  //           }

  //         }

  //         return sugList;

  //       }

    
  //   },

  //   suggestions() {
  //       let vm = this;
  //       let sugList = [];

  //       if (vm.searchContent == '') {
  //         return '';

  //       } else {

  //         for (let i = 0; i < vm.items.length; i++) {

  //           var temp = '';
  //           temp = vm.items[i].title;


  //           if (temp.indexOf(vm.searchContent) != -1) {

  //             sugList.push(vm.items[i]);

  //           }

  //         }

  //         return sugList;

  //       }

  //     },
  // },
};
</script>

<style>

* {
    position: relative;
    margin:0;
    padding:0;
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

.title{
  height: 120px;
  font-size: 25px;
  text-align: left;
  color: black;
  display: flex;
  align-items: center;
}

.rate{
  color: blue;
}

.imgBox {
  /* max-width: 240px; */
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
}

.desc{
  height: 500px;

}



/* .suggestionsSection {
    position: absolute;
    color: black;
    z-index: 10;
    width: 535px;
    max-height: 150px;
    overflow: auto;
  }

  li {
    list-style: none;
    text-align: start;
    padding: 5px;
    cursor: pointer;
  }

  li:hover {
    background-color: rgba(121, 133, 171)
  } */

</style>
