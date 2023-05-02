import React from 'react'
import './Downloads.css';
import Dashbaord from '../Dashboard/Dashboard';
import { ImHistory } from 'react-icons/im';
import { MdOutlineAdd } from 'react-icons/md';
import DownloadCard from '../../../Components/DownloadCard/DownloadCard';
import DocumentFileCard from '../../../Components/DownloadCard/DocumentFileCard';
import DocumentFileCard2 from '../../../Components/DownloadCard/DocumentFileCard2';
import DocumentFileCard3 from '../../../Components/DownloadCard/DocumentFileCard3';

function Downloads() {
  const downloadcarditem1 = [
    { name: 'Unit Plans' }
  ]
  const downloadcarditem2 = [
    { name: 'Lesson Plans' }
  ]
  const downloadcarditem3 = [
    { name: 'PowerPoint Presentations' }
  ]
  const downloadcarditem4 = [
    { name: 'Educational Handouts' }
  ]
  const downloadcarditem5 = [
    { name: 'Context Builders' }
  ]
  const downloadcarditem6 = [
    { name: 'Writing Prompts' }
  ]
  return (
    <>
      <Dashbaord>
        <section className='min-vh-100' style={{ backgroundColor: '#f0f8ff' }}>
          <div className='container-fluid'>
            <div className='d-flex justify-content-between pt-2'>
              <div className='fw-bold fs-5'>
                <p><ImHistory /> <span className=''>Creation Hisotry</span></p>
              </div>
              {/* <div className='ml-auto'>
                <button type='button' className='btn border-primary py-0 rounded-5 border border-2 text-primary fs-5'><MdOutlineAdd className='fs-3 fw-bolder text-primary pb-1' /><span className='text-dark fw-bold px-1'>Request a New Tool</span></button>
              </div> */}
            </div>
            <div className='row my-3'>
              <div className='py-3 text-secondary' style={{ fontSize: '14px' }}>Folders</div>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DownloadCard downloadcarddata={downloadcarditem1} />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DownloadCard downloadcarddata={downloadcarditem2} />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DownloadCard downloadcarddata={downloadcarditem3} />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DownloadCard downloadcarddata={downloadcarditem4} />
              </div>
            </div>

            <div className='row my-3'>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DownloadCard downloadcarddata={downloadcarditem5} />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DownloadCard downloadcarddata={downloadcarditem6} />
              </div>
            </div>
            <div className='row my-3'>
              <div className='py-3 text-secondary' style={{ fontSize: '14px' }}>
                Recent Creations
              </div>
              {/* <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DocumentFileCard />
              </div> */}
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DocumentFileCard2 />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
                <DocumentFileCard3 />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch'>
              </div>
            </div>
          </div>
        </section>
      </Dashbaord>
    </>
  )
}

export default Downloads