<template>
  <div class="container">
    <div class="film-player player">
      <video
        v-if="isSender"
        class="film-player-video"
        ref="film_player"
        playsinline
        autoplay
      ></video>
      <div
        class="player film-player-video"
        v-if="!!filmVideo && !isSender"
        v-player="filmVideo"
      ></div>
    </div>
    <div class="user">
      <div
        v-if="localUserVideo"
        class="player user-player"
        v-player="localUserVideo"
      ></div>
      <div
        class="player user-player"
        v-for="video in remoteUserVideo"
        :key="video.uid"
        v-player="video"
      ></div>
    </div>
    <agora :channel="channel">
      <agora-video-sender
        :playerConfig="{ fit: 'contain' }"
        customizationPlayer
        @video-ready="handleLocalUserVideo"
      ></agora-video-sender>
      <agora-video-receiver
        :playerConfig="{ fit: 'contain' }"
        customizationPlayer
        @video-ready="handleRemoteVideoVideo"
      ></agora-video-receiver>
      <agora-audio-sender></agora-audio-sender>
      <agora-audio-receiver></agora-audio-receiver>
    </agora>
    <!-- share video client -->
    <agora v-if="isSender && filmStream" :channel="channel" :uid="filmUid">
      <agora-video-sender
        type="custom"
        customizationPlayer
        :config="filmVideoConfig"
      ></agora-video-sender>
      <agora-audio-sender
        type="custom"
        :config="filmAudioConfig"
      ></agora-audio-sender>
    </agora>
  </div>
</template>
<script>
export default {
  name: "Film",
  props: {
    channel: String,
    fileUrl: String,
  },
  data() {
    return {
      localUserVideo: null,
      remoteUserVideo: [],
      filmStream: null,
      filmVideo: null,
      filmUid: 999999,
    };
  },
  computed: {
    isSender() {
      return !!this.fileUrl;
    },
    isReceiver() {
      return !this.fileUrl;
    },
    filmVideoConfig() {
      const track = this.filmStream
        ? this.filmStream.getVideoTracks()[0]
        : null;
      return {
        mediaStreamTrack: track,
      };
    },
    filmAudioConfig() {
      const track = this.filmStream
        ? this.filmStream.getAudioTracks()[0]
        : null;

      return {
        mediaStreamTrack: track,
      };
    },
  },
  mounted() {
    if (this.isSender) {
      const filmPlayer = this.$refs.film_player;
      filmPlayer.src = this.fileUrl;
      filmPlayer.onplay = () => {
        // adapter of firefox
        const stream = filmPlayer.mozCaptureStream
          ? filmPlayer.mozCaptureStream()
          : filmPlayer.captureStream();
        stream.onactive = () => {
          this.filmStream = stream;
        };
      };
      filmPlayer.play();
    }
  },
  methods: {
    handleLocalUserVideo(video) {
      this.localUserVideo = video;
    },
    handleRemoteVideoVideo(videos) {
      this.remoteUserVideo = videos.filter((v) => v.uid !== this.filmUid);
      if (this.isReceiver) {
        this.filmVideo = videos.find((v) => v.uid === this.filmUid);
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.container
  width 100vw
  height 100vh
  display flex
  justify-content space-between
  align-items center
  .film-player
    width calc(100% - 200px)
    height 100%
  .player
    overflow hidden
    background-color black
  .user
    display flex
    flex-direction  column
    justify-content flex-start
    height 100%

  .film-player-video
    width 100%
    height 100%
  .user-player
    width 200px
    height 200px
    margin 5px 0
</style>
