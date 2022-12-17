import {useContext} from 'react';
import {QuizContext} from '../../context/quiz';
import WellDone from '../../assets/img/welldone.svg';
import './GameOver.css';

function GameOver(){
    return(
        <div>
            <h2>Game Over</h2>
        </div>
    )
}

export default GameOver;