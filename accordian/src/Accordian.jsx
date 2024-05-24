import data from './data';
import React, { useState, createContext } from 'react';
import Question from './Question';
import './index.css'


export const IDContext = createContext();

export default function Accordian(){
	const [currId, setCurrId] = useState(null); // Stores ID of data item to be expanded currently
  const [multiId, setMultiId] = useState(false); // Allow or not allow multi-selection
  const [multipleId, setMultipleId] = useState([]); // List of multiple IDS

  function makeQuestions(){
    return (
      <>
        {
          data.map(dataItem => {
            return (
              <IDContext.Provider key = {dataItem.id} value={[currId, setCurrId, multiId, multipleId, setMultipleId]}>
                <Question item = {dataItem} />
              </IDContext.Provider>
            );
          })
        }
      </>
    );
  }

  function toggleMultipleId(){
    if(multiId) setMultipleId([]);
    else if(currId){
      setMultipleId([currId]);
      setCurrId(null);
    }

    setMultiId(!multiId);
  }

  return (
    <>
      ACCORDIAN
      <div className='questions-container'>
        <h1 className='accordian-h1'>Questions!</h1>
        <button onClick={toggleMultipleId} className='accordian-btn'>Enable Multi Selection</button>
        <div className='question-items-container'>
          {data && data.length ? makeQuestions() : 
            <div className='no-questions'>NO QUESTIONS AVAILABLE</div>
          }
        </div>
      </div>
    </>
  );
}