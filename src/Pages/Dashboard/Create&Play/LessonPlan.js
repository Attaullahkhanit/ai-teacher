import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { MdPlayLesson } from 'react-icons/md';
import Dashbaord from '../Dashboard/Dashboard';
import { TbRefreshDot } from 'react-icons/tb';
import { ImDownload, ImHistory } from 'react-icons/im';
 import { Configuration, OpenAIApi } from "openai";
//  import Translation from "./components/Translation";
import { arrayItems } from '../../../Components/OptionSelection';
import WywisingEditor from '../../../Components/wywising-editor/wywising-editor';
import PDFGenerator from '../../../Components/pdf/generate-pdf';
 


function LessonPlan() {
  const [conversation, setConversation] = useState([]);
  const [inputText, setInputText] = useState(''); 
  const navigate = useNavigate()

  function gotToCreateAndPlayPage() {
    navigate('/createplay')
  }
  function goToPdfGenerator () {
    navigate('/pdfgenerator')
  }

  const configuration = new Configuration({
     apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState(arrayItems[0].option);
  const [result, setResult] = useState("");
 
  const callAIModel = async () => {
    let object = { ...option, prompt: inputText }; 
    const response = await openai.createCompletion(object); 
     setResult(response.data.choices[0].text); 
   };
 

  return (
    <>
      <Dashbaord>
        <section className='min-vh-100'>
          <div className='container-fluid'>
            <div className='align-item-center py-3'>
              <BsArrowLeft className='text-primary fs-5 ' />
              <span onClick={gotToCreateAndPlayPage} className="text-primary text-decoration-none pe-auto px-2">Back To WorkShop</span>
            </div>
            <div className='row px-3'>
              <div className='col-md-7'>
                <div className='py-4 d-flex flex-row justify-content-between'>
                  <div><h2 className=''>Lesson Plan <MdPlayLesson className="text-warning" /></h2></div>
                </div>
                <div>      
                  <p className='fw-bold py-1 my-0'>Topic or Lesson</p>
                </div>
                <div class="input-group">
                  <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="form-control" placeholder="Enter Text" onKeyDown={async (e) => {
                    if (e.key === 'Enter') { 
                      callAIModel()
                     }
                  }} />
                </div>
                <div className='mt-3'>      
                  <p className='fw-bold py-1 my-0'>Course</p>
                </div>
                <div class="input-group">
                  <input type="text" className="form-control" placeholder="Enter Text" />
                </div>
                <button className='btn btn-primary mt-3 mb-4 w-100'>Generation Lesson Plan</button>
                <div>
                  <p className='fw-bold'>Save time and quickly draft lesson plans for any subject matter.</p>
                </div>
                <div>
                  {conversation.map((message, index) => (
                    <div key={index}>{message}</div>
                  ))}
                </div>
              </div>
              <div className='col-md-5 border-start border-gray border-3 '>
                <div className='d-flex align-items-baseline text-primary'>
                  <div><ImHistory size={15} /></div>
                  <div><p className='px-2'>History</p></div>
                </div>
                <WywisingEditor content={result} />
                {/* <div className='w-100 min-vh-100 bg-dark d-flex align-items-center justify-content-center downloadpdfready'>
                   <div className='justify-content-center text-center'>
                    <p className='fst-italic text-secondary'>Your lesson plan will appear here, once it<br/>
                       is available for download.
                    </p>
                    <ImDownload onClick={goToPdfGenerator} className='fs-2 text-info endownload'/>
                    {result}
                  </div>
                </div> */}
              </div> 
            </div>
          </div>
        </section>
      </Dashbaord>
    </>
  )
}

export default LessonPlan