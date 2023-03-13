export interface ThumbnailDetails {
  url: string;
  width: number;
  height: number;
}

export interface StoryboardsDetails {
  width: string;
  height: string;
  thumbsCount: string;
  columns: string;
  rows: string;
  interval: string;
  storyboardCount: number;
  url: string[];
}

export interface VideoAdaptiveFormats {
  approxDurationMs: string;
  averageBitrate: number;
  bitrate: number;
  contentLength: string;
  fps: number;
  height: number;
  itag: number;
  mimeType: string;
  projectionType: string;
  quality: string;
  qualityLabel: string;
  url: string;
  width: number;
}

export interface AudioAdaptiveFormats {
  approxDurationMs: string;
  audioChannels: number;
  audioQuality: string;
  audioSampleRate: string;
  averageBitrate: number;
  bitrate: number;
  contentLength: string;
  itag: number;
  loudnessDb: number;
  mimeType: string;
  projectionType: string;
  quality: string;
  url: string;
}

export interface FormatsDetails {
  approxDurationMs: string;
  audioChannels: number;
  audioSampleRate: string;
  averageBitrate: number;
  bitrate: number;
  contentLength: string;
  fps: number;
  height: number;
  itag: number;
  mimeType: string;
  projectionType: string;
  quality: string;
  qualityLabel: string;
  url: string;
  width: number;
}

export interface ResultsObject {
  adaptiveFormats: VideoAdaptiveFormats[] & AudioAdaptiveFormats[];
  allowRatings: boolean;
  channelId: string;
  channelTitle: string;
  description: string;
  expiresInSeconds: number;
  formats: FormatsDetails[];
  id: string;
  isLiveContent: boolean;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  keywords: string[];
  lengthSeconds: string;
  status: string;
  storyboards: StoryboardsDetails[];
  thumbnail: ThumbnailDetails[];
  title: string;
  viewCount: string;
}

export interface ResultsProps {
  item: ResultsObject;
}
