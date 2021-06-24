import { AgoraRtcVueRemoteUserMediaList, TrackType } from "~/interface";
import { IAgoraRTCClient, UID, IRemoteTrack, IRemoteAudioTrack, IRemoteVideoTrack, VideoPlayerConfig } from "agora-rtc-sdk-ng";
declare const AgoraVideoReceiver_base: import("vue-class-component/lib/declarations").VueClass<unknown>;
export default class AgoraVideoReceiver extends AgoraVideoReceiver_base {
    /***
     * @declare
     */
    subscribeList: AgoraRtcVueRemoteUserMediaList;
    client: IAgoraRTCClient;
    __getTracksFromAllSubscribeUsersByUidList: (uidList: UID[]) => (IRemoteAudioTrack | IRemoteVideoTrack)[];
    __checkTrackIsPlaying: (track: IRemoteTrack) => boolean;
    __checkTrackIsNotPlaying: (track: IRemoteTrack) => boolean;
    getAllSubscribeUsersUidList: () => UID[];
    /***
     * @Prop
     */
    LQStreamClassName: string;
    customizationPlayer: boolean;
    refuse: UID[];
    accept: UID[];
    playerConfig: VideoPlayerConfig;
    /***
     * @data
     */
    playList: AgoraRtcVueRemoteUserMediaList;
    HQList: UID[];
    LQList: UID[];
    trackType: TrackType;
    timers: {
        [k: string]: number | null;
    };
    /***
     * @methods
     */
    __subscribeChangeHandler(list: AgoraRtcVueRemoteUserMediaList): void;
    __playList(list: AgoraRtcVueRemoteUserMediaList): void;
    __triggerRemoteUserChangeEvent(): void;
    __stop(uidList: UID[]): void;
    __play(uidList: UID[]): void;
    setHQStream(...list: UID[] | [UID[]]): Promise<void>;
    __setHQStreamByUid(uid: UID): Promise<void>;
    __setLQStreamByUid(uid: UID): Promise<void>;
    switchStreamByUid(uid: UID): Promise<void>;
    __firstFrameDecoded(track: IRemoteTrack): void;
}
export {};
