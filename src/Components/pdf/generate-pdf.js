import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PDFGenerator = () => {
  const generatePDF = () => {
    const docDefinition = {
      content: [
        {
          text: 'Sample PDF with Styling',
          style: 'header'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    <button onClick={generatePDF}>
      Generate PDF
    </button>
  );
};

export default PDFGenerator;
