import './App.css';
import Likes from './content/likes';
import Title from './content/title';
import './content/content.css';
import Comments from './content/comments';
import Spin from './content/spin';
import { useSelector } from 'react-redux';


function App() {

  const error = useSelector(state => state.appReducer.error)


  return (
    <div className="app">
      <div className='wrap'>
        <div className="spin">
          <Spin />
        </div>
        <div className='card'>
          {error && (
            <div className="error">
              {error}
            </div>
          )}
          <div className='cardImg'>
            <img src='https://abrakadabra.fun/uploads/posts/2022-02/1643773423_1-abrakadabra-fun-p-kanokha-ili-konokha-naruto-1.jpg' />
            <Title />
            <Likes />
          </div>
          <div className="cardText">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
