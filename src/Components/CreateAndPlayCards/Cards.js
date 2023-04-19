import React from 'react';
import './CreateAndPlayCards.css';
import { useNavigate } from 'react-router-dom';
import { FcPlanner } from 'react-icons/fc';

function Cards({createandplaycard}) {

  const navigate = useNavigate()
  function goToLessonPlan () {
      navigate('/lessonplan');
  }
  return (
    <>
        {createandplaycard.map((items) => (
        <div className='card p-1 my-2 text-center border-0 rounded-1 shadow-sm cardbgcss'>
            <div>
              <i className={items?.cardicon}></i>
              <h5 className=''>{items?.title}</h5></div>
            <div><p className=''>{items?.paratext}</p></div>
            <div class="d-grid gap-3 col-8 mx-auto">
              <button className="btn btn-outline-warning " type="button" onClick={goToLessonPlan}>{items?.namebtn}</button>
            </div>
        </div>
        ))}
    </>
  )
}

export default Cards