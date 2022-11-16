import { useEffect, useState } from 'react';
import './content.css'
import { deleteComments, updateComments  } from '../redux/actions';
import { useDispatch } from 'react-redux';


const Comment = ({data}) => {

    const [commentText, setCommentText] = useState('');

    const {text, id} = data;

    useEffect( () => {
        if(text) {
            setCommentText(text)
    }}, [text])

    const handleChange = (e) => {
        setCommentText(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateComments(commentText, id))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteComments(id))
    }

    const dispatch = useDispatch();

    return (
        <div className="comment">
            <form onSubmit={handleUpdate} className="commentsItem">
                <input value={commentText} type="text" onChange={handleChange}/>
                <input type="submit" hidden />
                <div onClick={handleDelete} className="commentDelete">&times;</div>
            </form>
        </div>
    )
}

export default Comment;