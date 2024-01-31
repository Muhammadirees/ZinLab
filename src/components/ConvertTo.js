import { FaFileWord } from "react-icons/fa6";
import { FaFilePowerpoint } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa6";
import { BiSolidFileJpg } from "react-icons/bi";
import { BiSolidFileTxt } from "react-icons/bi";

export default function ConvertTo() {
  return (
    <section className="section-container">
      <h2 className="section-header">Convert to PDF</h2>
      <div className="section-items">
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <FaFileWord className="word-logo" />
            </div>
            <h3 className="section-title">Word to PDF</h3>
            <p className="section-description">
              The best Word to PDF converter online
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <FaFilePowerpoint className="power-logo" />
            </div>
            <h3 className="section-title">PPT to PDF</h3>
            <p className="section-description">
              Convert PowerPoint to PDF online
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <FaFileExcel className="excel-logo" />
            </div>
            <h3 className="section-title">Excel to PDF</h3>
            <p className="section-description">
              Easily Convert Excel spreadsheet to PDF
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <BiSolidFileJpg className="jpg-logo" />
            </div>
            <h3 className="section-title">JPG to PDF</h3>
            <p className="section-description">
              Convert JPG, PNG, BMP, GIF and TIFT images to PDF
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <BiSolidFileTxt className="text-logo" />
            </div>
            <h3 className="section-title">TXT to PDF</h3>
            <p className="section-description">
              Convert TXT to PDF online for free
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
