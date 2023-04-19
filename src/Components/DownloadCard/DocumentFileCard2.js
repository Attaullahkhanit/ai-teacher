import React from 'react';
import { BsFiletypePdf } from 'react-icons/bs';
import { AiFillFolder } from 'react-icons/ai';

function DocumentFileCard2() {
  return (
    <>
        <div className='border bg-white border-1 rounded w-100 h-auto'>
            <div className='w-100 fs-1 d-flex'style={{height: '150px'}}>
                <BsFiletypePdf className="text-danger m-auto" size={70}/>
            </div>
            <div className='border border-2 text-whited-flex flex-row w-100'>
                <div className='text-secondary py-2 mr-auto'>
                    <BsFiletypePdf className='text-danger fs-4 mx-2'/><span style={{fontSize: '13px', fontWeight: '500'}}>Context Builder167896194...</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default DocumentFileCard2