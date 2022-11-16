import { useDispatch, useSelector } from 'react-redux';
import './content.css';


const Title = (props) => {

    const text = useSelector(state => {
        const { inputReducer } = state;
        return inputReducer.text;
    })
    
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(e.target.value)
    }


    return (
        <div className="title">
            <div className="titleTop">
                <input type="text" onChange={handleChange} />
            </div>
            <p>{ text }</p>
        </div>
    )
}

export default Title;