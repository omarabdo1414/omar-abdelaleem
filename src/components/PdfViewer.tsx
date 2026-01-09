// components/PdfViewer.tsx
'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const nextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages));
  const prevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Document
            file="/cv/Omar Abdelaleem.pdf"
            className="w-full"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex justify-center items-center h-96">
                <div className="animate-pulse text-gray-500">Loading CV...</div>
              </div>
            }
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={800}
              className="shadow-lg"
            />
          </Document>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span>Page {pageNumber} of {numPages}</span>
        <div className="flex space-x-2">
          <button 
            onClick={prevPage}
            disabled={pageNumber <= 1}
            className={`px-3 py-1 rounded ${
              pageNumber <= 1 
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            } transition-colors`}
          >
            Previous
          </button>
          <button 
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className={`px-3 py-1 rounded ${
              pageNumber >= numPages
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
            } transition-colors`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;