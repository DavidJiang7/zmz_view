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
        <div v-for="(item,index) in data" :key="index + '-' + item.ResourceId" class="item_div" :style="{backgroundImage: 'url('+ item.ImgLink +')' }">
            <span class="type same">{{item.Channel == 'tv' ? '剧集' : '电影'}}</span>
            <span class="level same">E级</span>
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
        },
        {
          ResourceId: 12321,
          NameCN: '猎魔人',
          ImgLink: 'http://tu.jstucdn.com/ftp/2019/1018/b_1a1aef6c8325c9d47f885130757cfc8d.jpg',
          Score: 9.8,
          Channel: 'tv',
          Level: 'e',
          ResourceType: '科幻/悬疑/惊悚',
        },
        {
          ResourceId: 12321,
          NameCN: '猎魔人',
          ImgLink: 'http://tu.jstucdn.com/ftp/2019/1018/b_1a1aef6c8325c9d47f885130757cfc8d.jpg',
          Score: 9.8,
          Channel: 'tv',
          Level: 'e',
          ResourceType: '科幻/悬疑/惊悚',
        },
        {
          ResourceId: 12321,
          NameCN: '猎魔人',
          ImgLink: 'http://tu.jstucdn.com/ftp/2019/1018/b_1a1aef6c8325c9d47f885130757cfc8d.jpg',
          Score: 9.8,
          Channel: 'tv',
          Level: 'e',
          ResourceType: '科幻/悬疑/惊悚',
        },
        {
          ResourceId: 12321,
          NameCN: '猎魔人',
          ImgLink: 'http://tu.jstucdn.com/ftp/2019/1018/b_1a1aef6c8325c9d47f885130757cfc8d.jpg',
          Score: 9.8,
          Channel: 'tv',
          Level: 'e',
          ResourceType: '科幻/悬疑/惊悚',
        },
        {
          ResourceId: 12321,
          NameCN: '猎魔人',
          ImgLink: 'http://tu.jstucdn.com/ftp/2019/1018/b_1a1aef6c8325c9d47f885130757cfc8d.jpg',
          Score: 9.8,
          Channel: 'tv',
          Level: 'e',
          ResourceType: '科幻/悬疑/惊悚',
        },
        {
          ResourceId: 12321,
          NameCN: '猎魔人',
          ImgLink: 'http://tu.jstucdn.com/ftp/2019/1018/b_1a1aef6c8325c9d47f885130757cfc8d.jpg',
          Score: 9.8,
          Channel: 'tv',
          Level: 'e',
          ResourceType: '科幻/悬疑/惊悚',
        },
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
  //min-width: 1200px;
  //min-height: 1000px;
  position: relative;
  //background: url("../../assets/list_small.jpg");
  background-size: 100% 100%;
  background-position: center center;  
  // .index-mask {
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  //   background-color: rgba(0, 0, 0, 0.1);
  // }
  .background {
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
      display: flex;
      flex-wrap: wrap;
      .item_div {
        margin: 10px;
        width: 220px;
        height: 300px;
        border-radius: 7px; //圆角
        color: #fff;
        background-repeat:no-repeat;
        background-size: cover;
        overflow: hidden;
        .same {
          margin-top: 5px;
          height: 22px;
          text-align: center;
          width: 70px;
        }
        .type {
          float: left;
          transform: rotate(315deg);
          margin-left: -20px;
          background-color: cornflowerblue;
        }
        .level {
          float: right;
          transform: rotate(45deg);
          margin-right: -20px;
          background-color: lightslategray;
        }
      }
    }
  }
}
</style>
