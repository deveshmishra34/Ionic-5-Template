export class FileModal {
    _id: string;
    baseUrl: string;
    key: string;
    name: string;
    url: string;

    constructor(data) {
        const file = data || {};

        this._id = file._id || '';
        this.baseUrl = file.baseUrl || '';
        this.key = file.key || '';
        this.name = file.name || '';
        this.url = this.baseUrl + this.key || '';
    }

}

export class VideoDetailModal {
    name: string;
    title: string;
    image: string;
    thumbnail_url: string;
    embedCode: string;
    hls_url: string;
    vimeoId: string;
    description: string;
    duration: string;

    // title: "1_Euclid’s Division Lemma.mp4"
    // duration: "00:04:49"
    // description: null
    // thumbnail_url: "https://i.vimeocdn.com/video/756778382_1280x960.jpg?r=pad"
    // hls_url: "https://player.vimeo.com/external/315092050.m3u8?s=b1bc1cb85bc5cc248bfc009f514a0c33f7b539dd"
    // video_id: "315092050"
    // vimeoId: "315092050"

    constructor(data) {
        const videoDetailData = data || {};

        this.name = videoDetailData.name || '';
        this.title = videoDetailData.title || '';
        this.image = videoDetailData.image || '';
        this.thumbnail_url = videoDetailData.thumbnail_url || '';
        this.embedCode = videoDetailData.embedCode || '';
        this.hls_url = videoDetailData.hls_url || '';
        this.vimeoId = videoDetailData.vimeoId || '';
        this.description = videoDetailData.description || '';
        this.duration = videoDetailData.duration || '';
    }

}