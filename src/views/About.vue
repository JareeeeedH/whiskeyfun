<template>
  <div class="about">
    <h1 class="text-primary">{{ name }}</h1>

    <div style="text-align:right; padding: 5px;">
      <h1>共有{{ this.lovedList.length }}筆紀錄</h1>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-12" v-for="item in lovedList" :key="item.id">
          <div class="card">
            <div class="title d-flex flex-column">
              <h1>
                {{ item.mainTitle }}
                <button @click="delFromLocalStorage(item)" class="delBtn">
                  Remove
                </button>
              </h1>
              <h1>{{ item.subTitle }}</h1>
            </div>

            <div class="row p-3">
              <div
                class="col-md-2 d-flex flex-column justify-content-center align-items-center"
              >
                <img v-lazy="item.imgSrc" />
                <p class="score">
                  {{ item.scores }}
                </p>

                <button
                  @click="openModal(item.mainTitle, item.NOTE)"
                  type="button"
                  class="d-md-none btn btn-primary"
                >
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
            <h1 class="modal-title bg-Main" id="exampleModalLabel">
              {{ modalTitle }}
            </h1>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>

          <div class="modal-body modealText">
            {{ modalNote }}
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "ProductList",
  data() {
    return {
      name: "Loved List",
      modalTitle: "",
      modalNote: "",
    };
  },
  computed: {
    lovedList() {
      return this.$store.state.lovedList;
    },
  },
  methods: {
    openModal(title, note) {
      this.modalTitle = title;
      this.modalNote = note;
      $("#exampleModal").modal("show");
    },
    delFromLocalStorage(item) {
      this.$store.dispatch("DEL_LOVED_LIST", item.id);
      alert("已刪除");
    },
  },
  created() {
    this.$store.dispatch("GET_LOCAL_DATA");
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

.bg-Main {
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
  color: #121212;
}

.modealText {
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  color: #121212;
}

.score {
  font-size: 25px;
  font-weight: bolder;
  margin-top: 10px;
  color: #121212;
}

img:hover {
  transform: scale(1.25);
  transition: 0.2s;
}

.delBtn {
  border: none;
  text-decoration: none;
  border-radius: 200px;
  font-size: 0.75rem;
  padding: 5px;
  background: white;
}
.delBtn:hover {
  background: red;
  color: white;
}
</style>
