import { FaFileWord } from "react-icons/fa6";
import { FaFilePowerpoint } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa6";
import { BiSolidFileJpg } from "react-icons/bi";
import { BiSolidFileTxt } from "react-icons/bi";

export default function ConvertFrom() {
  return (
    <section className="section-container">
      <h2 className="section-header">Convert from PDF</h2>
      <div className="section-items">
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <FaFileWord className="word-logo" />
            </div>
            <h3 className="section-title">PDF to Word</h3>
            <p className="section-description">
              Easily convert PDF to Word document
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <FaFilePowerpoint className="power-logo" />
            </div>
            <h3 className="section-title">PDF to PPT</h3>
            <p className="section-description">
              Easily convert PDF to PowerPoint online
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <FaFileExcel className="excel-logo" />
            </div>
            <h3 className="section-title">PDF to Excel</h3>
            <p className="section-description">
              Easily convert PDF to xls for free
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <BiSolidFileJpg className="jpg-logo" />
            </div>
            <h3 className="section-title">PDF to JPG</h3>
            <p className="section-description">
              Convert PDF files to a set of optimized JPG, PNG, BMP, G...
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <BiSolidFileTxt className="text-logo" />
            </div>
            <h3 className="section-title">PDF to TXT</h3>
            <p className="section-description">
              Convert your PDF to TXT, and extract text from your PDF
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
