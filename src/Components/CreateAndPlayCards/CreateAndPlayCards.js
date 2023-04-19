import React from 'react'
import Cards from './Cards'


function CreateAndPlayCards() {

        
        const createandplaycardsitems1 = [
            { cardicon: "bi bi-calendar-event fs-3 text-primary",
              title : 'Lesson Plan',
              paratext: 'Save yourself time by creating a lesson plan for a topic of your choice. Be sure to consider the topic, learning objectives and pupils ability.',
              namebtn: 'PDF'
            }
        ]
        const createandplaycardsitems2 = [
            { cardicon: "bi bi-alarm fs-3 text-primary",
              title : 'Quiz Time',
              paratext: 'Create a quiz in no time to help assess pupils learning. This can be used for both formative and summative assessments.',
              namebtn: 'TEXT EDITOR'
            }
        ]
        const createandplaycardsitems3 = [
            { cardicon: 'bi bi-filetype-rb fs-3 text-primary',
              title : 'Assessment Rubric',
              paratext: 'Want to assess students learning, create a rubric. It will even help you to determine levels of performance.',
              namebtn: 'TEXT EDITOR'
            }
        ]
        const createandplaycardsitems4 = [
            { cardicon: 'bi bi-activity fs-3 text-primary',
              title : 'Idea Generator',
              paratext: 'Generate ideas for activities , homework or just about anything else.',
              namebtn: 'TEXT EDITOR'
            }
        ]

        const createandplaycardsitems5 = [
            { cardicon: 'bi bi-envelope-at fs-3 text-primary',
              title : 'Parent Emails',
              paratext: 'Want to keep parents up to date with students progress, or the weekly email.',
              namebtn: 'TEXT EDITOR'
            }
        ]
        const createandplaycardsitems6 = [
            { cardicon: 'bi bi-pencil-square fs-3 text-primary',
              title : 'Writing Tasks',
              paratext: 'Want help with summarising content or providing an outline of written work.',
              namebtn: 'TEXT EDITOR'
            }
        ]
        const createandplaycardsitems7 = [
            { cardicon: 'bi bi-ticket-detailed fs-3 text-primary',
              title : 'Report Writing',
              paratext: 'Want help to generate written reports that are accurate, comprehensive and well written.',
              namebtn: 'TEXT EDITOR'
            }
        ]
        const createandplaycardsitems8 = [
            { cardicon: 'bi bi-file-play fs-3 text-primary',
              title : 'Free Play',
              paratext: 'Do you have an idea of your own and want to use our co-pilot without restrictions? Then let the fun begin.',
              namebtn: 'TEXT EDITOR'
            }
        ]
  return (
    <>
        <div className='container-fluid'>
            <div className='row my-lg-3 my-md-3'>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems1}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems2}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems3}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems4}/>
                </div>
            </div>
            <div className='row my-lg-3 my-md-3'>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex  align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems5}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems6}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems7}/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch'>
                    <Cards createandplaycard ={createandplaycardsitems8}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateAndPlayCards