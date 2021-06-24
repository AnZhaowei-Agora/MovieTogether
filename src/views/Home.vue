<template>
  <div class="home">
    <div class="preview">
      <div class="view">
        <video id="player" ref="player"></video>
      </div>
      <div class="file">
        <div class="title">
          <div class="part">Movie</div>
          <div class="part">Together</div>
        </div>
        <div class="file-select">
          <div v-if="fileUrl" class="selected-info">
            已选择影片 {{ file.name || "" }},
            {{ Math.floor(((file.size || 0) / 1024 / 1024) * 100) / 100 }}Mb
          </div>
          <div class="primary" @click="handleClickSelectFile">
            选择想要分享的影片
          </div>
        </div>
      </div>
    </div>
    <div class="primary" @click="startWatch">开始观影</div>
    <input
      style="display: none"
      type="file"
      multiple="false"
      ref="file"
      accept="video/mp4"
      @change="handleSelectFile"
    />
  </div>
</template>

<script>
import { v4 as uuidV4 } from "uuid";

export default {
  name: "Home",
  data() {
    return {
      channel: "movieTogether" + uuidV4().replaceAll("-", ""),
      fileUrl: "",
    };
  },
  methods: {
    handleClickSelectFile() {
      this.$refs.file.click();
    },
    handleSelectFile(e) {
      const file = e.target.files[0];
      this.file = file;
      const objectUrl = window.URL.createObjectURL(file);
      this.fileUrl = objectUrl;
      const player = this.$refs.player;
      player.src = objectUrl;
      player.play();
    },
    startWatch() {
      this.$router.push({
        name: "Film",
        params: {
          fileUrl: this.fileUrl,
        },
        query: {
          channel: this.channel,
        },
      });
    },
  },
};
</script>
<style lang="stylus">
*
  margin 0
  padding 0
</style>
<style lang="stylus" scoped>
$primary-bg-color = #0e6dfe
$primary-color = #fff
$main-title-font-family = zapfino,'Segoe Script'
div
  width 100%
.home
  display flex
  align-items center
  flex-direction column
  width 100vw
  height 100vh
  .preview
    display flex
    box-sizing border-box
    justify-content space-between
    width 100%
    height calc(100vh - 80px)
    align-items center
    margin-bottom 10px
    padding 100px
    .view
      width 720px
      height 380px
      background-color black
      border-radius 20px
      overflow hidden
      #player
        width 100%
        height 100%
    .file
      display flex
      flex-direction column
      align-items center
      justify-content space-between
      width 400px
      height 500px
      .title
        width 100%
        .part
          width 100%
          height 100px
          text-align start
          font-size 60px
          font-weight 700
          font-family $main-title-font-family
          &:nth-child(2)
            text-align end
      .primary
        justify-self flex-end
      .file-select
        display flex
        flex-direction column
        align-items center
        .selected-info
          text-align center

  .primary
    background-color $primary-bg-color
    color $primary-color
    width 60%
    height 20px
    line-height 20px
    margin 30px
    padding 10px 0
    border-radius 4px
    text-align center
    text-decoration none
    font-size 20px
    letter-spacing 2px
    font-weight 700
    &:hover
      cursor pointer
</style>
