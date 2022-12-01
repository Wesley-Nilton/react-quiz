import {useContext} from 'react';
import Quiz from '../../assets/img/quiz.svg';
import {QuizContext} from '../../context/quiz';
import './Welcome.css';

function Welcome(){
    const quizState = useContext(QuizContext);
    console.log(quizState);
    return(
        <div id='welcome'>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Início do Quiz" />
        </div>
    )
}

export default Welcome;