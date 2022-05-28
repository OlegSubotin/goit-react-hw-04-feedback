import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <ul className={s.listText}>
                <li ><p className={s.text}>Good: {good}</p></li>
                <li ><p className={s.text}>Neutral: {neutral}</p></li>
                <li ><p className={s.text}>Bad: {bad}</p></li>
            </ul>
            <p className={s.text}>Total: {total}</p>
            <p className={s.text}>Positive feedback: {positivePercentage}%</p>
        </>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;