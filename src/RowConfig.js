import { requests } from './requests';

export const rowFieldData = [
    {
      id: 1,
      title: "NETFLIX ORIGINAL",
      relatedURL: requests.fetchNetflixOriginals,
      isLargeRow:true
    },
    {
      id: 2,
      title: "TRENDING",
      relatedURL: requests.fetchTrending,
      isLargeRow:false
    },
    {
      id: 3,
      title: "TOP RATED",
      relatedURL: requests.fetchTopRated,
      isLargeRow:false
    },
    {
      id: 4,
      title: "ACTION",
      relatedURL: requests.fetchAction,
      isLargeRow:false
    },
    {
      id: 5,
      title: "NOW PLAYING",
      relatedURL: requests.fetchNowPlaying,
      isLargeRow:false
    },
    {
      id: 6,
      title: "UP COMING",
      relatedURL: requests.fetchUpComing,
      isLargeRow:false
    }
  ];
  