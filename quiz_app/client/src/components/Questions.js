import React, { useEffect, useState } from "react";
import data from "../database/data";

export default function Question() {

    const [checked, setChacked] = useState(undefined)
    
    const question = data[0]
    
    useEffect((question) => {
        console.log(data)
    })

    

    function onSelect(){

        console.log('radio button change')
    }

    return(
        <div className="questions">
            <h2 className="text-light">simple questions 1</h2>

            <ul key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li key={i}>
                            <input 
                                type="radio"
                                value={false}
                                name="options"
                                id={'q1-option'}
                                onChange={onSelect()}
                            />

                            <label className='text-primary' htmlFor={`q1-option`}> option </label>
                            <div className='check checked' ></div>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}
