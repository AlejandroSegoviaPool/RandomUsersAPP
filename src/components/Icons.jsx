import {FaUser, FaEnvelopeOpen, FaCalendarTimes, FaHouseUser, FaPhone, FaLock} from 'react-icons/fa';
export const Icons = ({value}) => {
    return(
        <div>
            <button className="Icon" data-label="name" onMouseOver={value}>
                <FaUser/>
            </button>
            <button className="Icon" data-label="email" onMouseOver={value}>
                <FaEnvelopeOpen/>
            </button>
            <button className="Icon" data-label="date" onMouseOver={value}>
                <FaCalendarTimes/>
            </button>
            <button className="Icon" data-label="street" onMouseOver={value}>
                <FaHouseUser/>
            </button>
            <button className="Icon" data-label="phone" onMouseOver={value}>
                <FaPhone/>
            </button>
            <button className="Icon" data-label="username" onMouseOver={value}>
                <FaLock/>
            </button>
        </div>
    )
}