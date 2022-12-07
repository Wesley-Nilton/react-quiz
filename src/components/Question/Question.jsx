import {useContext} from 'react';
import {QuizContext} from '../../context/quiz';

function Question(){
    const [quizState, dispatch] = useContext(QuizContext);
    return(
        <div id='question'>
            <p>Pergunta 0 de 10</p>
            <h2>Pergunta atual</h2>
            <div id="opstions-container">
                <p>Opções</p>
            </div>
            <button>Continuar</button>
        </div>
    )
}

export default Question;