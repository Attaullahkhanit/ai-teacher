import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ImDownload, ImDownload3 } from 'react-icons/im';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PDFGenerator = (props) => {
  const generatePDF = () => {
    const docDefinition = {
      content: [
        {
          text: "Teaching Copilot.com",
          style: 'header'
        },
        {
          text: props.content,
          style: 'body'
        }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 20]
        },
        body: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
  };

  return ( 
       <ImDownload3 onClick={generatePDF} className='fs-2 text-info pb-2 ' style={{float:"right"}}/> 
  );
};

export default PDFGenerator;
