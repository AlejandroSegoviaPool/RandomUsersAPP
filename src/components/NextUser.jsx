import {FaArrowRight} from 'react-icons/fa'

export const NextUser = ({randomUser}) => {
    
    return(
        <div>
            <div className="btnMain">
                <button className="btnNext" onClick={randomUser}>
                    <FaArrowRight />
                </button>

            </div>
        </div>
    )
}