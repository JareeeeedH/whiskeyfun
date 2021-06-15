<template>
  <div class="about">
    <h1 class="text-primary">{{ name }}</h1>

    <!-- Button trigger modal -->
<button @click='openModal' type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


  </div>

</template>

<script>
// import products from "../assets/db.json";
import $ from 'jquery'

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
    openModal(){
      console.log('bang');
      $('#exampleModal').modal('show');
    },
  },


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

</style>
