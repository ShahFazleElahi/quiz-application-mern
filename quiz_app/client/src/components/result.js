import React from 'react';
import "../styles/Result.css"
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';

export default function Result() {

    function onRestart(){
        console.log('on Restart')
    }

    return (
        <div className='container'>
            <h1 className="title text-light"> Quiz Application</h1>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username:</span>
                    <span className='bold'>Daily Tuition</span>
                </div>

                <div className='flex'>
                    <span>Total Quiz Point:</span>
                    <span className='bold'>50</span>
                </div>

                <div className='flex'>
                    <span>Total Question:</span>
                    <span className='bold'>50</span>
                </div>

                <div className='flex'>
                    <span>Total Attempts:</span>
                    <span className='bold'>50</span>
                </div>

                <div className='flex'>
                    <span>Total Earn Point:</span>
                    <span className='bold'>50</span>
                </div>

                <div className='flex'>
                    <span>Quiz Result:</span>
                    <span className='bold'>Passed</span>
                </div>
            </div>

            <div className='start'>
                <Link className='btn' to={'/'} onClick={onRestart}>Restart
                </Link>
            </div>
            {/* Result table*/}
            <div className='container'>
                <ResultTable></ResultTable>
            </div>
        </div>
    )
}