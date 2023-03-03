<template>
  <div class="hello">
    <div class="btn-container">
      <a href="#" class="btn-3d green" @click.stop="getData">데이터 요청</a>
    </div>
    <ul>
      <li>
        <textarea v-model="tempMessage"></textarea>
      </li>
    </ul>
    <ul>
      <li>
        <textarea
          placeholder="데이터가 들어오는 곳."
          v-model="getApiData"
        ></textarea>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchGetData } from "@/api";

let timer = null;

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      loadingMessage: "api 요청 중... 잠시만 기다려주세요...",
      pending: false,
      tempMessage: "",
      apiData: null,
    };
  },
  computed: {
    getApiData() {
      if (this.apiData === null) return;
      return JSON.stringify(this.apiData);
    },
  },
  methods: {
    async getData() {
      if (this.pending) return alert("api 호출 중 입니다.");
      this.pending = true;
      this.startMessage();
      const res = await fetchGetData().catch((err) => {
        console.error("fetchGetData", err);
      });
      this.pending = false;
      this.stopMessage();
      this.tempMessage = "api 요청 완료!!!";
      this.apiData = res.data;
    },
    startMessage() {
      const content = this.loadingMessage;
      let count = 0;
      timer = setInterval(() => {
        this.tempMessage += this.loadingMessage[count++];
        if (count > content.length) {
          this.tempMessage = "";
          count = 0;
        }
      }, 100);
    },
    stopMessage() {
      clearInterval(timer);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 50%;
}
a {
  text-decoration: none;
}
textarea {
  width: 100%;
  height: 100px;
  padding: 10px 10px;
  font-size: 14px;
}

/* 3D Button */
.btn-3d {
  position: relative;
  display: inline-block;
  font-size: 22px;
  padding: 20px 60px;
  color: white;
  margin: 20px 10px 10px;
  border-radius: 6px;
  text-align: center;
  transition: top 0.01s linear;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
}
.btn-3d.red:hover {
  background-color: #e74c3c;
}
.btn-3d.blue:hover {
  background-color: #699dd1;
}
.btn-3d.green:hover {
  background-color: #80c49d;
}
.btn-3d.purple:hover {
  background-color: #d19ecb;
}
.btn-3d.yellow:hover {
  background-color: #f0d264;
}
.btn-3d.cyan:hover {
  background-color: #82d1e3;
}

.btn-3d:active {
  top: 9px;
}

/* 3D button colors */
.btn-3d.red {
  background-color: #e74c3c;
  box-shadow: 0 0 0 1px #c63702 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #c24032, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
}
.btn-3d.red:active {
  box-shadow: 0 0 0 1px #c63702 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
}

.btn-3d.blue {
  background-color: #6da2d9;
  box-shadow: 0 0 0 1px #6698cb inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 rgba(110, 164, 219, 0.7), 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
}
.btn-3d.blue:active {
  box-shadow: 0 0 0 1px #6191c2 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
}

.btn-3d.green {
  background-color: #82c8a0;
  box-shadow: 0 0 0 1px #82c8a0 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 rgba(126, 194, 155, 0.7), 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
}
.btn-3d.green:active {
  box-shadow: 0 0 0 1px #82c8a0 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
}

.btn-3d.purple {
  background-color: #cb99c5;
  box-shadow: 0 0 0 1px #cb99c5 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 rgba(189, 142, 183, 0.7), 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
}
.btn-3d.purple:active {
  box-shadow: 0 0 0 1px #cb99c5 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
}

.btn-3d.cyan {
  background-color: #7fccde;
  box-shadow: 0 0 0 1px #7fccde inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 rgba(102, 164, 178, 0.6), 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
}
.btn-3d.cyan:active {
  box-shadow: 0 0 0 1px #7fccde inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
}

.btn-3d.yellow {
  background-color: #f0d264;
  box-shadow: 0 0 0 1px #f0d264 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 rgba(196, 172, 83, 0.7), 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
}
.btn-3d.yellow:active {
  box-shadow: 0 0 0 1px #f0d264 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
}
</style>
