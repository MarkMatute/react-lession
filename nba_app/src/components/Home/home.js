import React from 'react';
import NewsSlider from '../widgets/NewsSlider/newsSlider'; 
import NewsList from '../widgets/NewsList/newsList';
import VideoList from '../widgets/VideoList/videoList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NewsSlider 
          type="featured"
          start={0}
          take={3}
          settings={{
            dots: false
          }}
        />

        <NewsList 
          type="card"
          loadmore={true}
          start={0}
          amount={3}
        />

        <VideoList
          type="card"
          title={true}
          loadmore={true}
          start={0}
          amount={3}
        />
        
      </div>
    )
  }
}

export default Home;