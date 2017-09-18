<template>
  <div class="app-container">

    <nav class="app-head">
      <div class="app-head-inner">
        <router-link to="/">
          <img src="./assets/logo.png">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username !== ''" class="nav-pile">|</li>
            <li v-if="username !== ''" @click="quit">退出</li>
            <li v-if="username === ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <footer class="footer">
      <p>© 2016 fishenal MIT</p>
    </footer>

    <Dialog>
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </Dialog>


  </div>
</template>

<script type="text/ecmascript-6">
  import Dialog from '@/components/base/dialog';
  import {mapGetters} from 'vuex';
  export default {
    computed: mapGetters(['isShowAboutDialog', 'isShowLogDialog', 'isShowRegDialog', 'username']),
    methods: {
      aboutClick () {
        this.isShowAboutDialog = true;
      },
      logClick () {
        this.isShowLogDialog = true;
      },
      regClick () {
        this.isShowRegDialog = true;
      },
      closeDialog (attr) {
        this[attr] = false;
      },
      onSuccessLog (data) {
        console.log(data);
        this.closeDialog('isShowLogDialog');
        this.username = data.username;
      }
    },
    components: {
      Dialog
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .app-container {
    .app-head {
      background: #363636;
      color: #b2b2b2;
      height: 90px;
      line-height: 90px;
      width: 100%;
      .app-head-inner {
        width: 1200px;
        margin: 0 auto;
        img {
          width: 50px;
          margin-top: 20px;
        }
        .head-nav {
          float: right;
          .nav-list {
            overflow: hidden;
            li {
              cursor: pointer;
              float: left;
              &.nav-pile {
                padding: 0 10px;
              }
            }
          }
        }
      }
    }
    .container {
      width: 1200px;
      margin: 0 auto;
    }
    .footer {
      text-align: center;
      height: 80px;
      width: 100%;
      line-height: 80px;
      background: #e3e4e8;
      clear: both;
      margin-top: 30px;
    }
  }
</style>
