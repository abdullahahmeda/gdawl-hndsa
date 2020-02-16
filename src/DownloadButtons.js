import React from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF } from "react-component-export-image";

const DownloadButtons = ({usedRef}) => {
    return (
        <div>
            <button onClick={() => exportComponentAsJPEG(usedRef)}>
           تحميل الجدول كصورة
            </button>
            <button onClick={() => exportComponentAsPDF(usedRef)}>
           تحميل الجدول كPDF
            </button>
        </div>
    )
}

export default DownloadButtons;