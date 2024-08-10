import React from "react";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.png";
import reactvite from "../../assets/reactvite.jpg";

const Tech = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-5 mx-5 " id="tech">
      <div class="col-md-4">
        <div class="card w-100 project1 bg-transparent">
          <img src={reactvite} class="card-img-top shadow" alt="..." />
          {/* <div className="caption">
            <i class="bi bi-arrow-up-circle fs-3"></i>
            <p>Basics</p>
          </div> */}
        </div>
      </div>

      <div class="col-md-4">
        <div class="card w-100 project1 bg-transparent">
          <img src={img4} class="card-img-top shadow" alt="..." />
          {/* <div className="caption">
            <i class="bi bi-arrow-up-circle fs-3"></i>
            <p>Basics</p>
          </div> */}
        </div>
      </div>

      <div class="col-md-4">
        <div class="card w-100 project1 bg-transparent">
          <img src={img5} class="card-img-top shadow" alt="..." />
          {/* <div className="caption">
            <i class="bi bi-arrow-up-circle fs-3"></i>
            <p>Basics</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Tech;
