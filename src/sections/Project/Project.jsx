import React from "react";
import "./Project.css";
import reactlogo from "../../assets/reactlogo.jpg";
import reactvite from "../../assets/reactvite.jpg";

function Project() {
  return (
    <div className="card text-center mx-5 border-0 " id="projects">
      <div className="card-body ">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col">
            <div className="card h-100 shadow">
              <img src={reactvite} className="card-img-top " alt="..." />
              <div className="caption">
                <i class="bi bi-arrow-up-circle fs-3"></i>
                <p>Porject 1</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow">
              <img src={reactvite} className="card-img-top " alt="..." />
              <div className="caption">
                <i class="bi bi-arrow-up-circle fs-3"></i>
                <p>Porject 1</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card h-100 shadow">
              <img src={reactvite} className="card-img-top " alt="..." />
              <div className="caption">
                <i class="bi bi-arrow-up-circle fs-3"></i>
                <p>Porject 1</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
