// PDF.js worker configuration helper
// This is called from within dynamic imports to ensure client-side only execution

export const configurePDFWorker = async (): Promise<boolean> => {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    // Use a workaround: configure via react-pdf's pdfjs export
    // This must be called from within a dynamic import callback
    const reactPdf = await import('react-pdf');
    const pdfjs = reactPdf.pdfjs;
    
    if (pdfjs && typeof pdfjs === 'object' && pdfjs.GlobalWorkerOptions) {
      const version = pdfjs.version || '5.4.530';
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`;
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Failed to configure PDF.js worker:', error);
    return false;
  }
};

