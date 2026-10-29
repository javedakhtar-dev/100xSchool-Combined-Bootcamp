export type ProfileData = {
  bgImgURL: string,
  profileImgURL: string,
  profileName: string,
  profileShortDescription: string,
  profileLocation: string
};

export type AnalyticsData = {
  profileViews: number;
  postImpressions: number;
};

export type SerachBoxData = {
  hasIcon: boolean,
  title: string
}