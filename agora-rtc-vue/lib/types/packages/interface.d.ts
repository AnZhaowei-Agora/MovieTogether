import Vue from "vue";
import { IAgoraRTC, IAgoraRTCClient, ILocalAudioTrack, ILocalVideoTrack, UID, IAgoraRTCRemoteUser, SDK_CODEC, SDK_MODE, ClientRole, VideoPlayerConfig } from "agora-rtc-sdk-ng";
import AgoraRtc from "./AgoraRtc/src/main.vue";
import Log from "#/mixins/log";
import MixinForTopError from "#/mixins/mixinForTopError";
export declare type VideoSenderType = "camera" | "screen" | "custom";
export interface AgoraRtcVueRemoteUserMedia {
    user: IAgoraRTCRemoteUser;
    mediaType: TMediaType;
    uid: UID;
}
export declare type AgoraRtcVueRemoteUserMediaList = AgoraRtcVueRemoteUserMedia[];
export interface AgoraRtcVueLocalVideoTrack {
    type: VideoSenderType;
    originTrack: ILocalVideoTrack;
    tid: string;
}
export interface IRtcData {
    client: null | IAgoraRTCClient;
    localAudioTrackList: {
        type: AudioSenderType;
        originTrack: ILocalAudioTrack;
        tid: string;
    }[];
    localVideoTrack: AgoraRtcVueLocalVideoTrack | null;
    audioTrackForScreenVideo: null | ILocalAudioTrack;
    uid: null | UID | undefined;
    remoteUserPublishedTrackList: AgoraRtcVueRemoteUserMediaList;
    __AgoraRtc: IAgoraRTC | null;
    hasJoin: boolean;
}
export declare type MediaDeviceInfoList = {
    kind: string;
    label: string;
    [k: string]: any;
}[];
export declare type TMediaType = "audio" | "video";
export declare type TrackType = "audioTrack" | "videoTrack";
export declare type AudioSenderType = "microphone" | "custom" | "buffer";
export declare type ScreenVideoWithAudio = "disable" | "enable" | "auto";
export declare type TAgoraRtcCom = Vue & AgoraRtc & Log & MixinForTopError & {
    rtcData: IRtcData;
    client: IAgoraRTCClient | null;
};
export interface AgoraRtcVueClientConfig {
    mode: SDK_MODE;
    codec: SDK_CODEC;
    role?: ClientRole;
}
export interface LocalVideoItemForDirective {
    uid: UID;
    media: {
        uid: UID;
        track: ILocalVideoTrack;
        mediaType: "video";
    };
    __client: IAgoraRTCClient;
    playerConfig: VideoPlayerConfig;
}
export interface RemoteMediaItemForDirective {
    uid: UID;
    media: AgoraRtcVueRemoteUserMedia;
    __client: IAgoraRTCClient;
    playerConfig: VideoPlayerConfig;
}
export declare type RemoteMediaListForDirective = RemoteMediaItemForDirective[];
