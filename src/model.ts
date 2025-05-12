export interface InfoInter {
  title: string;
  describe: string;
  src: string;
}

export interface RecentlyWaterInter {
  name: string;
  stcd: number;
  current: number;
  tm: string;
}

export interface CountInter {
  total_count: number;
  thisyear_count: number;
  visits: number;
  downloads: number;
}

export interface HistoryInter {
  event_time: string;
  content: string;
}
