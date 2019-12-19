<template>
  <div class="index">
    <div class="background">
      <div class="search common">
        <el-input
          placeholder="搜索 权力的游戏 试试...... ♪(＾∀＾●)ﾉ"
          v-model="Keyword"
          class="input-with-select"
        >
          <el-select v-model="Channel" slot="prepend" placeholder="请选择">
            <el-option label="电影" value="movie">电影</el-option>
            <el-option label="剧集" value="tv">剧集</el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="hot common">
        <div class="hot_div">
          <ul class="hot_ul">
            <li class="hot_item" v-for="(item) in HotKey" :key="item">
              <a>{{item}}</a>
            </li>
          </ul>
          <div class="refresh_div">
            <a class="refresh">换一批</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Channel: "movie",
      Keyword: "",
      HotKey: [
        "权力的游戏","权力的游戏","权力的游戏","权力的游戏","权力的游戏","权力的游戏","权力的游戏","权力的游戏","权力的游戏","权力的游戏"
      ]
    };
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.index {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 720px;
  position: relative;
  background: url("../assets/home_orignal.jpg");
  background-size: 100% 100%;
  background-position: center center;  
  .background {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .common {
      width: 50%;
    }
    .search {
      .el-select {
        width: 90px;
      }
    }
    .hot {
      .hot_div {
        width: 100%;
        padding-top: 30px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .hot_ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          .hot_item {
            width: 100px;
          }
        }
      }
    }
  }
}
</style>
