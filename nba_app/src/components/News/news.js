import React from 'react';
import NewsSlider from '../widgets/NewsSlider/newsSlider';
import NewsList from '../widgets/NewsList/newsList';
import VideoList from '../widgets/VideoList/videoList';

class NewsHome extends React.Component {
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
          type="cardImage"
          loadmore={true}
          start={0}
          amount={5}
        />
      </div>
    )
  }
}

export default NewsHome;