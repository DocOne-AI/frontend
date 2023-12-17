import { useState } from "react";
import google from "./assets/google.svg";
import eyeslash_fill from "./assets/eyeslash-fill.svg";
import eye from "./assets/eye.svg";
import image from "./assets/20231217184525.png";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="warp">
        <div className="leftBox">
          <img src={image} alt="" />
        </div>
        <div className="rightBox">
          <article className="rightBox_title">
            You are one step away from your dream offer！
          </article>
          <main className="rightBox_main">
            <div className="rightBox_main_button">
              <img className="rightBox_main_button_img" src={google} alt="" />
              <span className="rightBox_main_button_span">
                Sign up with Google
              </span>
            </div>
            <div className="rightBox_main_searchBox">
              <article>Your Email Address</article>
              <div className="rightBox_main_searchBox_inputBox">
                <input
                  className="rightBox_main_searchBox_inputBox_input"
                  type="text"
                />
              </div>
            </div>
            <div className="rightBox_main_searchBox">
              <article>Your PassWord</article>
              <div className="rightBox_main_searchBox_inputBox">
                <input
                  className="rightBox_main_searchBox_inputBox_input"
                  type={show ? "text" : "password"}
                />
                <img
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="rightBox_main_button_img rightBox_main_button_img_eye"
                  src={show ? eye : eyeslash_fill}
                  alt=""
                />
              </div>
            </div>
            <div className="rightBox_main_searchBox">
              <article>Confirm Password</article>
              <div className="rightBox_main_searchBox_inputBox">
                <input
                  className="rightBox_main_searchBox_inputBox_input"
                  type="text"
                />
              </div>
            </div>
            <div className="rightBox_main_select">
              <input type="checkbox" />
              By checking this box, you are agreeing to our terms of use
            </div>
            <div className="rightBox_main_submit">Create Account</div>
            <div className="rightBox_main_submit_desc">
              Already have an account?
              <a className="rightBox_main_submit_desc_a" href="#">
                Log in
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
