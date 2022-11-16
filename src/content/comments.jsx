import './content.css'
import Comment from './comment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { commentsLoad, createComments } from '../redux/actions';

const Comments = (props) => {

    const [textComment, setTextComment] = useState('');

    const comments = useSelector( state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    })

    const dispatch = useDispatch();

   

    const handleChange = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(createComments(textComment, id))
    }

    useEffect(() => {
        dispatch(commentsLoad())
    },[])


    return (
        <div className="comments">
            <form onSubmit={handleSubmit} className="commentsItemCreate">
                <input onChange={handleChange} type="text" placeholder='Enter a comment'/>
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <Comment key={res.id} data={res} />
            })}
        </div>
    )
}

export default Comments;