import './content.css';
import { connect } from 'react-redux';
import { decrementLikes, incrementLikes } from '../redux/actions';

const Likes = (props) => {
    return (
        <div className="likes">
            <button onClick={props.onIncrementLikes} className="addLike"> ♡ {props.likes}</button>
            <button onClick={props.onDecrementLikes} className="dislike">Dislike</button>
        </div>
    )
}

const MapStateToProps = (state) => {
    const { likesReducer } = state;
    return {
        likes: likesReducer.likes
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () =>  dispatch(decrementLikes())
    }
}



export default connect(MapStateToProps, MapDispatchToProps)(Likes);