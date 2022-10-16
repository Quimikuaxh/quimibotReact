import React from 'react';
import '../stylesheets/SquareInfo.css'

export function SquareInfo(){
    return(
        <div className='squareinfo-container'>
            <img
                className='square-image'
                src={require('../images/pikachu-original.png')}
                alt='Pikachu'
            />
            <div className='text-container'>
                <p className='pokemon-name'>Pikachu</p>
                <p className='pokemon-type1'>Electric</p>
                <p className='pokemon-type2'></p>
            </div>
        </div>
    );
}
