import React from "react";
import pic from "../../assets/pic.jpg";
const About = () => {
  return (
    <div className="card text-center mx-5 " id="about">
      <div className="card-body shadow">
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div className="col-md-4">
              <img
                src={pic}
                className="img-fluid rounded-circle w-75 py-3"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title">The Future of Technology</h3>
                <p class="card-text">
                  I'm a college student with a strong interest in computer
                  technology. Growing up, I always fascinated by the endless
                  possibilities that technology offers, and I spent countless
                  hours learning to code and experimenting with different
                  programming languages. As I progressed in my academic journey,
                  I began to realize the impact that technology can have on
                  people's lives, and I became determined to use my skills to
                  make a positive difference.
                </p>
                <p class="card-text">
                  In my free time, I enjoy reading about the latest advancements
                  in technology, learning new programming languages, and working
                  on personal projects that challenge me to think creatively.
                  I'm a strong believer in the idea that technology should be
                  used to improve people's lives, and I'm committed to using my
                  skills to make a positive impact in the world.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">-Sherwin Sarmiento</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
