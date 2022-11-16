import {Triangle} from 'react-loader-spinner';
import { useSelector } from 'react-redux';


const Spin = () => {

    const spinner = useSelector(state => state.appReducer.loading)

    return (
        <div className="loader">
            <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={spinner} />
        </div>
    )
}

export default Spin;