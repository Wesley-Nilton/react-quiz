import {useContext} from 'react';
import {QuizContext} from '../context/quiz';
import './Option.css'

function Option(){
    const [quizState, dispatch] = useContext(QuizContext);
    
    return(
        <div>Option</div>
    )
}

export default Option;