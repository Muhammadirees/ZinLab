import { SiSubtitleedit } from "react-icons/si";
import { MdCrop } from "react-icons/md";
import { TbZoomReplace } from "react-icons/tb";
import { Tb3DRotate } from "react-icons/tb";

export default function Bookmarks() {
  return (
    <section className="section-container">
      <h2 className="section-header">Your Bookmarks</h2>
      <div className="section-items">
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <SiSubtitleedit className="bookmark-logo" />
            </div>
            <h3 className="section-title">Edit PDF</h3>
            <p className="section-description">
              Used the best online tool to edit PDF's in your broswer
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <MdCrop className="bookmark-logo" />
            </div>
            <h3 className="section-title">Crop PDF</h3>
            <p className="section-description">
              Crop PDF online to a selected area, adjust margin size....
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <TbZoomReplace className="bookmark-logo" />
            </div>
            <h3 className="section-title">Replace Text</h3>
            <p className="section-description">
              The easiest way to replace text online
            </p>
          </a>
        </div>
        <div className="section-item">
          <a href="https://www.hipdf.com/all-tools">
            <div className="section-logo">
              <Tb3DRotate className="bookmark-logo" />
            </div>
            <h3 className="section-title">Rotate PDF</h3>
            <p className="section-description">
              Rotate and save your PDF pages online for free
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
