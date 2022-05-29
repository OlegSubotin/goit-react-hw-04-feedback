import { useState } from "react";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from "components/Notification";


function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good * 100 / countTotalFeedback());
    };

    const onLeaveFeedback = (evt) => {
        const option = evt.target.textContent;
        switch (option) {
            case 'good': setGood(good + 1);
                break;
            case 'neutral': setNeutral(neutral + 1);
                break;
            case 'bad': setBad(bad + 1);
                break;
            default: return;
        };
    };
    
    return (
        <>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>
            {countTotalFeedback() === 0
                ? <Notification message={"There is no feedback"} />
                : <Section title={"Statistics"}>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                </Section>
            }                
        </>
    );
};

export default Feedback;



// import React, { Component } from "react";
// import Section from "components/Section";
// import FeedbackOptions from "components/FeedbackOptions";
// import Statistics from "components/Statistics";
// import Notification from "components/Notification";


// class Feedback extends Component{
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     countTotalFeedback = () => {
//         let arr = Object.values(this.state);
//         return arr.reduce((a, b) => a + b, 0);
//     };

//     countPositiveFeedbackPercentage = () => {
//         return Math.round(this.state.good * 100 / this.countTotalFeedback());
//     };

//     onLeaveFeedback = (evt) => {
//         const option = evt.target.textContent;
//         this.setState(prevState => ({
//             [option]: prevState[option] + 1,
//         })
//         );
//     };

//     render() {
//         const { good, neutral, bad} = this.state;
//         const {  onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
//         return (
//             <>
//                 <Section title={"Please leave feedback"}>
//                     <FeedbackOptions
//                         options={Object.keys(this.state)}
//                         onLeaveFeedback={onLeaveFeedback}
//                     />
//                 </Section>
//                 {countTotalFeedback()===0
//                     ? <Notification message={"There is no feedback"} />
//                     :<Section title={"Statistics"}>                    
//                     <Statistics
//                         good={good}
//                         neutral={neutral}
//                         bad={bad}
//                         total={countTotalFeedback()}
//                         positivePercentage={countPositiveFeedbackPercentage()}
//                     />
//                     </Section>
//                 }
                
//             </>
//         );
//     };
// }

// export default Feedback;