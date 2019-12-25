<template>
  <div class="index">
    <div class="index-mask"></div>
    <div class="background">
      <div class="search common">
        <ul class="level_ul">
            <li class="level_li">              
              <img src="../../assets/a.png" />
            </li>
            <li class="level_li">              
              <img src="../../assets/b.png" />
            </li>
            <li class="level_li">              
              <img src="../../assets/c.png" />
            </li>
            <li class="level_li">              
              <img src="../../assets/d.png" />
            </li>
            <li class="level_li">              
              <img src="../../assets/e.png" />
            </li>
        </ul>
      </div>
      <div class="item common">
        <div v-for="item in data" :key="item.ResourceId" class="item_div" :style="{backgroundImage: 'url('+ item.ImgLink +')' }">
            <span class="type">美剧</span>
            <span class="level">E</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          ResourceId: 12321,
          NameCN: '猎魔人',
          ImgLink: 'http://tu.jstucdn.com/ftp/2019/1018/b_1a1aef6c8325c9d47f885130757cfc8d.jpg',
          Score: 9.8,
          Channel: 'tv',
          Level: 'e',
          ResourceType: '科幻/悬疑/惊悚',
        }
      ]
    };
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.index {
  font-size: 14px;
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 700px;
  position: relative;
  //background: url("../../assets/list_small.jpg");
  background-size: 100% 100%;
  background-position: center center;  
  .index-mask {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .background {
    position: fixed;
    top: 0px;
    left: 0px;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .common {
      width: 80%;
    }
    .search {
      height: 10%;
      .level_ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;      
        flex-wrap: nowrap;
        .level_li {
          width: 10%;
          text-align: center;
        }
      }
    }
    .item {
      height: 90%;
      .item_div {
        width: 220px;
        height: 300px;
        //order-radius: 55px; //圆角
        color: #fff;
        background-repeat:no-repeat;
        background-size: cover;
        overflow: hidden;
        .type {
          float: left;
          // right: auto;
          // bottom: auto;
          // width: 70px;
          // left: -24px;
          // top: -4px;
          transform: rotate(0deg);
          //padding: 3px 0 14px 0;
        }
        .level {
          float: right;
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>
