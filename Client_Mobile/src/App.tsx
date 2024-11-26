import '../global.css';
import AppNavigator from './navigation/AppNavigator';

const LivesData = [
  {
    id: 1,
    teacher: "Dilsad",
    title: "Yeni projemizde ilerleme!",
    description: "Udemy App projemizde postman denemeleri yapalım ve backendi oturtalım.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q"
  },
  {
    id: 2,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _1",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q"
  },
  {
    id: 3,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _2",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q"
  },
  {
    id: 4,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _3",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q"
  }
];

const PermissionsData = [
  {
    id: 1,
    user: "Dilsad",
    title: "Yeni projemizde ilerleme!",
    description: "Udemy App projemizde postman denemeleri yapalım ve backendi oturtalım.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    permission_status: true
  },
  {
    id: 2,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _1",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    permission_status: false
  },
  {
    id: 3,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _2",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    permission_status: false
  },
  {
    id: 4,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _1",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    permission_status: true
  },
  {
    id: 5,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _2",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    permission_status: true
  },
  {
    id: 6,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _3",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    permission_status: true
  }
];

const PurchasesData = [
  {
    id: 1,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  },
  {
    id: 2,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  },
  {
    id: 3,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  },
  {
    id: 4,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  },
  {
    id: 5,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  },
  {
    id: 6,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  },
  {
    id: 7,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  },
  {
    id: 8,
    user: "Dilsad",
    video: "Redux Toolkit 1"
  }
];

const VideosData = [
  {
    id: 1,
    teacher: "Dilsad",
    title: "Yeni projemizde ilerleme!",
    description: "Udemy App projemizde postman denemeleri yapalım ve backendi oturtalım.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    price: "38"
  },
  {
    id: 2,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _1",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    price: "36"
  },
  {
    id: 3,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _2",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    price: "40"
  },
  {
    id: 4,
    teacher: "Dilsad",
    title: "Redux öğreniyoruz! _3",
    description: "1 saat içerisinde redux toolkit öğrenmeye çalışıyoruz toplaşın.",
    video_png: "https://mms.businesswire.com/media/20230322005274/en/761650/22/postman-logo-vert-2018.jpg",
    video_url: "https://www.youtube.com/watch?v=0jqDnyNz_4Q",
    price: "50"
  }
];

export default function App() {
  return (
    <AppNavigator />
  );
}
