import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <ul className={s.listButtons}>
            {options.map(option => (
                <li key={option}><button  className={s.button} type="button" onClick={onLeaveFeedback}>{option}</button></li>
            ))}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;