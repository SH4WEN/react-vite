import React from "react";
import { accessKey } from "../../../config.js";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div class="card border-0 mx-5" id="contact">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card ">
              <div class="card-body text-center shadow">
                <h5 class="card-title">Get in Touch</h5>
                <p class="card-text  d-flex flex-column align-items-center justify-content-center">
                  I'd love to hear from you! Whether you're interested in
                  collaborating on a project, have a question about my work, or
                  just want to say hello, please don't hesitate to reach out.
                </p>
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-messenger"></i>
                </a>
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-envelope-at-fill"></i>
                </a>
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body  shadow">
                <h5 class="card-title">Location</h5>
                <br />
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-geo-alt-fill"></i>
                </a>
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-geo-alt-fill"></i>
                </a>
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-geo-alt-fill"></i>
                </a>
                <a href="#" class="btn btn-primary m-2">
                  <i class="bi bi-geo-alt-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 ">
            <div class="card bg-transparent">
              <div class="card-body shadow ">
                <h5 class="card-title text-center mb-3">Message Me</h5>
                <form className="row g-3 needs-validation" onSubmit={onSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Name"
                      name="name"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group has-validation">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="@gmail.com"
                        name="email"
                        required
                      />
                      <div className="invalid-feedback">
                        Please Enter valid Gmail.
                      </div>
                    </div>
                  </div>

                  <div className="input-group">
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                      placeholder="Leave Your Message here"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />

                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary">
                      Send <i className="bi bi-send"></i>
                    </button>
                  </div>
                </form>
                <span className="send-span">{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
