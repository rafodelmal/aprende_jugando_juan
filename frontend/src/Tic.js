import React, { Component} from 'react';
import './Tic.css';
import {uid} from 'uid'

class Tic extends Component{

    constructor(){
        super()
        this.state = {
            turn:'x',
            gameEnd: false,
            winner: undefined,
            squares:''
        }
        this.gameState = {
            totalMoves : 0,
        }
    }

    componentWillMount() {
        this.restart()
    }
    clicked(e) {
        let index = e.target.dataset.square

        if (!this.state.gameEnd) {
            if (this.gameState.board[index] == ' ') {

                this.gameState.board[index] = this.state.turn
                e.target.innerText = this.state.turn

                this.setState({
                    turn: this.state.turn == 'X' ? 'O' : 'X',   ////Buscar solucion
                })
                
            }
        }

    }
    restart() {
        this.gameState.board = Array(9).fill('')

        this.setState({
            gameEnd: false,
            winnerLine : '',
            squares : <div id="board" onClick={ (e) =>{this.clicked(e)}}>
                {
                    this.gameState.board.map(  (square, key)=>{
                        return <div className="square" data-square={key} key= {uid()}></div>
                    }  )
                }
            </div>            
        })
    }


    render()  {
        return (
        
        <div id='game'>
            <div id='Status'>{this.state.winnerLine}</div>
            <div id='head'>Juguemos Triqui!!!</div>
            <div>
                {this.state.squares}
            </div>

        </div>
        
        )
    }
}

export default Tic;