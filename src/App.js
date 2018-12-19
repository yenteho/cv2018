import React, { Component } from "react";
import Swiper from "swiper";
import "./App.css";
import "./sass/style.sass";
import "./css/swiper.min.css";
const $ = window.$;

class App extends Component {
  change = x => {
    x.classList.toggle("open");
  };

  openCv1 = () => {
    document.getElementById("cv1").style.height = "100%";
  };
  closeCv1 = () => {
    document.getElementById("cv1").style.height = "0%";
  };
  openCv2 = () => {
    document.getElementById("cv2").style.height = "100%";
  };
  closeCv2 = () => {
    document.getElementById("cv2").style.height = "0%";
  };
  openPortfolio1 = () => {
    document.getElementById("yolomoto-biketire-3d").style.height = "100%";
  };
  closePortfolio1 = () => {
    document.getElementById("yolomoto-biketire-3d").style.height = "0%";
  };
  openPortfolio2 = () => {
    document.getElementById("yolomoto-biketire-movie").style.height = "100%";
  };
  closePortfolio2 = () => {
    document.getElementById("yolomoto-biketire-movie").style.height = "0%";
  };
  openPortfolio3 = () => {
    document.getElementById("yolomoto-biketire-icons").style.height = "100%";
  };
  closePortfolio3 = () => {
    document.getElementById("yolomoto-biketire-icons").style.height = "0%";
  };
  openPortfolio4 = () => {
    document.getElementById("pypat-dm").style.height = "100%";
  };
  closePortfolio4 = () => {
    document.getElementById("pypat-dm").style.height = "0%";
  };
  openPortfolio5 = () => {
    document.getElementById("pypat-web").style.height = "100%";
  };
  closePortfolio5 = () => {
    document.getElementById("pypat-web").style.height = "0%";
  };
  openPortfolio6 = () => {
    document.getElementById("ntust-patent").style.height = "100%";
  };
  closePortfolio6 = () => {
    document.getElementById("ntust-patent").style.height = "0%";
  };
  openPortfolio7 = () => {
    document.getElementById("yodex-l").style.height = "100%";
  };
  closePortfolio7 = () => {
    document.getElementById("yodex-l").style.height = "0%";
  };
  openPortfolio8 = () => {
    document.getElementById("yodex-h").style.height = "100%";
  };
  closePortfolio8 = () => {
    document.getElementById("yodex-h").style.height = "0%";
  };
  openPortfolio9 = () => {
    document.getElementById("waterfulart").style.height = "100%";
  };
  closePortfolio9 = () => {
    document.getElementById("waterfulart").style.height = "0%";
  };
  openPortfolio10 = () => {
    document.getElementById("patent-contest").style.height = "100%";
  };
  closePortfolio10 = () => {
    document.getElementById("patent-contest").style.height = "0%";
  };
  openPortfolio11 = () => {
    document.getElementById("aurora").style.height = "100%";
  };
  closePortfolio11 = () => {
    document.getElementById("aurora").style.height = "0%";
  };
  openPortfolio12 = () => {
    document.getElementById("travel").style.height = "100%";
  };
  closePortfolio12 = () => {
    document.getElementById("travel").style.height = "0%";
  };
  componentDidMount() {
    $(".filtr-container").filterizr();
    new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 5,
      loop: true,
      centeredSlides: true,
      autoplay: 3000
      //- autoplayDisableOnInteraction: false,
      //- paginationBulletRender: function (swiper, index, className) {
      //-     return '<span class="' + className + '">' + (index + 1) + '</span>';
      //- }
    });
    const modal = document.getElementById("modalbox");
    const btn = document.getElementById("modalbtn");

    const span = document.getElementsByClassName("back")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    };
    span.onclick = function() {
      modal.style.display = "none";
    };
    // Get the modal
    const modal1 = document.getElementById("modalbox1");
    // Get the button that opens the modal
    const btn1 = document.getElementById("modalbtn1");

    // Get the <span> element that closes the modal
    const span1 = document.getElementsByClassName("back1")[0];

    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
      modal1.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
      modal1.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
      if (event.target === modal1) {
        modal1.style.display = "none";
      }
    };
  }
  render() {
    return (
      <div id="wrapper">
        <header className="col-12" id="header">
          <div className="header-wrapper" onClick={() => e => this.change(e)}>
            <div className="burger is--hide" id="trigger">
              <div className="burger-menu">
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
              </div>
            </div>
            <div className="nav_logo">
              {/* <a href="#"> */}
              <embed src="img/logo.svg" type="" />>{/* </a> */}
            </div>
            <div className="nav_search" />
            <div className="nav_list" id="show">
              <ul>
                <a href={"mailto:ythoworkfun@gmail.com"}>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </header>
        <div className="row col-12" />
        <section id="intro">
          <div className="info-wrapper" />
        </section>
        <div className="row" />
        <section id="portfolio">
          <div className="portfolio-wrapper">
            <ul className="portfolio_filter">
              <div className="closebtn burger is--hide">
                <div className="burger-menu open">
                  <div className="bar1" />
                  <div className="bar2" />
                  <div className="bar3" />
                </div>
              </div>
              <li className="about active" data-filter="all">
                <i className="fa fa-home" aria-hidden="true" />
              </li>
              <li className="portfolio" data-filter="100">
                Portfolio
              </li>
              <li className="portfolio-list" data-filter="2">
                Product & Animation
              </li>
              <li className="portfolio-list" data-filter="3">
                Web & Graphic
              </li>
              <li className="portfolio-list" data-filter="4">
                Awards
              </li>
              <li className="portfolio-list" data-filter="5">
                Patent Analysis Award
              </li>
              <li className="portfolio-list" data-filter="6">
                Selected Projects
              </li>

              <li className="search-row">
                <i className="fa fa-search" aria-hidden="true" />
                <input type="text" name="filtr-search" data-search="" />>
              </li>
            </ul>
            <div className="device col-8">
              <div className="device_screen" id="device_screen">
                <div className="filtr-container">
                  <div
                    className="filtr-item who"
                    data-category="1"
                    data-sort=""
                    onClick={() => this.openCv1}
                  >
                    <img src="" alt="" />
                    <span>About</span>
                  </div>
                  <div
                    className="filtr-item who"
                    data-category="1"
                    data-sort=""
                    onClick={() => this.openCv2()}
                  >
                    <img src="" alt="" />
                    <span>Professional Experience</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="2, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio1()}
                  >
                    <img src="" alt="" />
                    <span>Zion Grotto Road Tire - 3D Model</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="2, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio2()}
                  >
                    <img src="" alt="" />
                    <span>Zion Grotto Road Tire - 3D Animation</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="2, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio3()}
                  >
                    <img src="" alt="" />
                    <span>Zion Grotto Road Tire - Icons & Business Card</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="3, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio4()}
                  >
                    <img src="" alt="" />
                    <span>Pypat IP Service Co., - Brochues </span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="3, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio5()}
                  >
                    <img src="" alt="" />
                    <span>Pypat IP Service Co., - Website</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="3, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio6()}
                  >
                    <img src="" alt="" />
                    <span>APAA Conferance - Poster / Manual</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="4, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio7()}
                  >
                    <img src="" alt="" />
                    <span>
                      Young Designers' Exhibition Award - Rush Handicraft
                    </span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="4, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio8()}
                  >
                    <img src="" alt="" />
                    <span>
                      Young Designers' Exhibition Award - Interior Design
                    </span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="4, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio9()}
                  >
                    <img src="" alt="" />
                    <span> Non-residential Space Interior Design Winner</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="5, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio10()}
                  >
                    <img src="" alt="" />
                    <span>
                      2016 Patent Analysis and Development Competition{" "}
                    </span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="6, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio11()}
                  >
                    <img src="" alt="" />
                    <span>360° Panorama Aurora Photography</span>
                  </div>
                  <div
                    className="filtr-item"
                    data-category="6, 100"
                    data-sort=""
                    onClick={() => this.openPortfolio12()}
                  >
                    <img src="" alt="" />
                    <span>Pingxi Travellers Lodge</span>
                  </div>
                  <div
                    className="filtr-item more"
                    data-category="1, 2, 3, 4, 5, 6"
                    data-sort=""
                  >
                    <img src="" alt="" />
                    <span>More...</span>
                  </div>
                </div>
              </div>
              <div className="menubtn" />
              <div className="overlay" id="cv1">
                <a
                  className="closebtn"
                  onClick={() => this.closeCv1()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="intro">
                  <div className="intro-photo">
                    <img src="img/photo.jpg" alt="" />
                  </div>
                  <div className="intro-content">
                    <h4>Hi, I'm YenTe Ho (何妍德),</h4>
                    <br />
                    <h5>
                      IT consultant with 3+ years of experience, specialty in UI
                      design, micro-interactions, UX research and front-end
                      development for digital gaming, e-commerce and startup.
                    </h5>
                    <br />
                    <div className="button" id="modalbtn">
                      Skills of Design{" "}
                    </div>
                    <div className="modal" id="modalbox">
                      <div className="modal-content">
                        <ul>
                          <li>
                            <h4>Front-end Web Developement</h4>
                            <h5>
                              Optimize web performance by building
                              cross-platform, cross-browser and RWD solutions in
                              desktop, tablet and mobile.
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>
                                HTML5(Pug), CSS3(sass), JQuery, JavaScript
                              </h6>
                            </div>
                          </li>
                          <li>
                            <h4>UI Design / Interaction Design</h4>
                            <h5>
                              Proficient at prototyping, creating and developing
                              design assets included wireframes, user flows,
                              iconography, and high-fidelity mockups.
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>Sketch, Adobe XD</h6>
                            </div>
                          </li>
                          <li>
                            <h4>UX Research</h4>
                            <h5>
                              Ability to plan and execute usability testing and
                              incorporate user feedback into final product
                              design.
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>Sketch, Adobe XD</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Industrial Design</h4>
                            <h5>
                              producing prototypes / Alias 3D Modeling /
                              Showcase 3D Rendering
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>Alias, AutoCad 2D, AutoCad3D, Showcase</h6>
                            </div>
                          </li>
                          <li>
                            <h4>3D Animation</h4>
                            <h5>
                              Titles and opticals design, music, animation
                              editing and post-production
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>After Effects, Blender, Photoshop </h6>
                            </div>
                          </li>
                          <li>
                            <h4>Comercial Design</h4>
                            <h5>
                              CIS Design, Logo, Business Card, Brochures, DM
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>
                                Photoshop, Illustrator, Lightroom, Painter
                              </h6>
                            </div>
                          </li>
                          <li>
                            <h4>Interior Design</h4>
                            <h5>
                              3dsMas 3D Modeling，Vray lighting Rendering,
                              Plan-elevation-section Drawing
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>3Ds MAX, Vray, Sketch up, AutoCad 2D</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Design Competition</h4>
                            <h5>ＩＦ, Reddot Competition</h5>
                          </li>
                        </ul>
                        <span className="back close">Back</span>
                      </div>
                    </div>
                    <div className="button" id="modalbtn1">
                      Skills of Patent
                    </div>
                    <div className="modal" id="modalbox1">
                      <div className="modal-content">
                        <ul>
                          <li>
                            <h4>Patent Search</h4>
                            <h5>
                              Utilizing variety of global patent databases such
                              as USPTO, EPO, TPO, JPO, CPO, Thomson Reuters,
                              WIPS, MTrends, LexisNexis, to search technical
                              documents
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>USPTO, EPO, TPO, JPO, CPO</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Patent Analysis</h4>
                            <h5>
                              Creating the technology/function matrix for
                              technology forecasting
                            </h5>
                            <div className="skill">
                              <i className="fa fa-wrench" aria-hidden="true">
                                {" "}
                              </i>
                              <h6>
                                Thomson Reuters, WIPS, MTrends, LexisNexis
                              </h6>
                            </div>
                          </li>
                          <li>
                            <h4>Office Action reply</h4>
                            <h5>
                              Comparing the prior art with written description
                              and claim language to consider the best solution
                              to solve the Unity / Novelty / Inventive problems,
                              etc
                            </h5>
                          </li>
                          <li>
                            <h4>Translation</h4>
                            <h5>
                              Translating technical documents from and into
                              English and Chinese
                            </h5>
                          </li>
                        </ul>
                        <span className="back1 close">Back</span>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="contact">
                    <ul>
                      <a href="mailto:ythoworkfun@gmail.com">
                        <li>
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                        </li>
                      </a>
                      <a href="tel:0958-941-898">
                        <li>
                          <i className="fa fa-phone" aria-hidden="true" />
                        </li>
                      </a>
                      <a href="https://www.linkedin.com/in/yente-ho-b616baa1/">
                        <li>
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </li>
                      </a>
                      <a href="https://github.com/yenteho">
                        <li>
                          <i className="fa fa-github" aria-hidden="true" />
                        </li>
                      </a>
                      <a href="https://codepen.io/yenteho/">
                        <li>
                          <i className="fa fa-codepen" aria-hidden="true" />
                        </li>
                      </a>
                    </ul>
                  </div>
                  <a
                    className="download"
                    href="https://www.dropbox.com/s/szjynzcxqkkkuxw/%E4%BD%95%E5%A6%8D%E5%BE%B7Resume%20201705.pdf?dl=0"
                  >
                    {" "}
                    Download my CV{" "}
                  </a>
                  <br />
                </div>
              </div>
              <div className="overlay" id="cv2">
                <a
                  className="closebtn"
                  onClick={() => this.closeCv2()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="timline-wrapper">
                  <ul className="timeline">
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">Xuenn Pte Ltd. </span>
                          <span className="time-wrapper">
                            <span className="time">2017 Jul- Present</span>
                          </span>
                        </div>
                        <div className="desc left">
                          {" "}
                          <span>
                            - Implemented enhancing and supporting the current
                            188bet, TouTou, Rich88 and V9BET Sports Website
                            included Desktop, Mobile and Tablet products.
                          </span>
                          <br />
                          <span>
                            -Executed and translated high-level requirements of
                            visual design performances using HTML(Pug) and
                            CSS(SASS) into precise, intuitive, and functional
                            user interfaces.
                          </span>
                          <br />
                          <span>
                            - Restructured HTML and CSS(SASS) with Webpack as
                            Responsive web design for 2018 World Cup.
                          </span>
                          <br />
                          <span>
                            - Created icon-fonts which customized for 4 brands
                            to replace the previous sprite image system for
                            optimize file size.{" "}
                          </span>
                          <br />
                          <span>
                            - Negotiated and coordinated between users and
                            developers to check the final layouts, interactions
                            and functions in Axure, Sketch and Zeplin.
                          </span>
                          <br />
                          <span>
                            - Tested front-end code in multiple browsers to
                            ensure cross-browser compatibility.
                          </span>
                          <br />
                          <span>
                            - Went to Philippines on business for discussing and
                            planning the new projects.
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">Rapaq Ltd.</span>
                          <span className="time-wrapper">
                            <span className="time">2017 Mar- 2017 May</span>
                          </span>
                        </div>
                        <div className="desc left">
                          {" "}
                          <span>
                            - Used HTML, CSS(SCSS), JavaScript and jQuery to
                            create user-friendly web pages for E-commerce and
                            local social media.{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">Yolomoto Co., Ltd.</span>
                          <span className="time-wrapper">
                            <span className="time">2016 Sep - 2017 Feb</span>
                          </span>
                        </div>
                        <div className="desc left">
                          {" "}
                          <span>
                            - Graphic Designer/ Industrial Designer/ Animation
                            Designer/ Web Designer{" "}
                          </span>
                          <br />
                          <strong>Graphic Design：</strong>
                          <span>
                            {" "}
                            Used Adobe Graphic software as Photoshop and
                            Illustrator to design Logo, business card and
                            Brochures
                          </span>
                          <br />
                          <strong>- Industrial Design：</strong>
                          <span>
                            Used Alias and Autodesk Showcase to make bike tire
                            modeling and rendering
                          </span>
                          <br />
                          <strong>
                            - Multimedia Design / Animation Design：
                          </strong>
                          <span>
                            Used Blender and After Effects to build 3D models
                            and animation films
                          </span>
                          <br />
                          <span>
                            Designed and developed business website for start-up
                            company
                          </span>
                          <br />
                          <span>
                            Used HTML5, CSS3, JavaScript and Bootstrap3, JQuery
                            to make user interface
                          </span>
                          <br />
                          <span>
                            Consulted on various materials and design techniques
                            for new product lines and trade show displays
                          </span>
                          <br />
                          <span>Attended red-dot design competition</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">Master Degree</span>
                          <span className="time-wrapper">
                            <span className="time">2014 Sep - 2016 Jun</span>
                          </span>
                        </div>
                        <div className="desc">
                          <span>
                            National Taiwan University of Science and Technology{" "}
                          </span>
                          <span>College of Intellectual Property Studies </span>
                          <strong>Graduate Institute of Patent</strong>
                          <br />
                          <strong>（GPA: 4.0/4.0）</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">Boehmert & Boehmert</span>
                          <span className="time-wrapper">
                            <span className="time">2016 Mar - 2016 Jun </span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span> Patent Engineer Intern </span>
                          <strong>｜ Munich, Germany</strong>
                          <br />
                          <span>
                            - Received specialized training in patent searching,
                            analysis and drafting of EPO
                          </span>
                          <br />
                          <span>
                            - Compared the prior art with written description
                            and claim language mentioned by examiner carefully
                          </span>
                          <br />
                          <span>
                            - Discussed with clients to consider the best
                            solution to solve the Unity / Novelty / Inventive
                            problems
                          </span>
                          <br />
                          <span>
                            - Drafted EPO Office Action reply including novelty
                            and inventive steps under the European Patent
                            Convention
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            Mt. Jade Mountain Climbing{" "}
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2016 Apr</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span> 3952 meters high</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            PyPat IP Services Co., Ltd.{" "}
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2015 Jul - 2016 Jan</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>Patent Analysis Intern </span>
                          <br />
                          <span>
                            - Translated technical documents and data from
                            Chinese to English
                          </span>
                          <br />
                          <span>
                            - Utilized variety of global patent databases to
                            develop a new patent searching system
                          </span>
                          <br />
                          <span>
                            - Designed user interface of the patent searching
                            system
                          </span>
                          <br />
                          <span>
                            - Communicated with clients to optimize IP
                            strategies
                          </span>
                          <br />
                          <span>
                            - Provided the technology/function matrix for
                            technology forecasting
                          </span>
                          <br />
                          <span>
                            - Helped craft legal opinions on ownership,
                            inventorship, infringement, and validity issues
                          </span>
                          <br />
                          <span>- Designed DM/Quotation Form</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            New York Model United Nations
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2015 Apr</span>
                          </span>
                        </div>
                        <div className="desc">
                          <span>
                            Attended UNEP conference and acted as a delegate of
                            Seychelles
                          </span>
                          <br />
                          <span>
                            On the topic of “Promoting Resource Efficiency in
                            Urban Development”
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            Pan Asia Model United Nations{" "}
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2014 Nov</span>
                          </span>
                        </div>
                        <div className="desc">
                          <span>
                            Attended UNODC conference and acted as a delegate of
                            Kuwait
                          </span>
                          <br />
                          <span>
                            On the topic of “Substance abuse treatment and care
                            for women”{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">Bachelor Degree</span>
                          <span className="time-wrapper">
                            <span className="time">2015 Sep - 2016 Jan</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>
                            National Taiwan University of Science and Technology
                          </span>
                          <span>
                            US Patent Practice / Patent Litigation / Claim
                            Interpretation of Patents
                          </span>
                          <strong>Teaching Assistant</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">Cycling around Taiwan </span>
                          <span className="time-wrapper">
                            <span className="time">2015 Aug</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span> ｜ 9 days / 590 miles</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">
                            Coursera | University of Michigan
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2015 Nov - 2017 Feb</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>- HTML5</span>
                          <a href="https://www.coursera.org/account/accomplishments/certificate/BDSND8Q8T47A">
                            {" "}
                            Certificate
                          </a>
                          <br />
                          <span>- CSS3 </span>
                          <a href="https://www.coursera.org/account/accomplishments/certificate/ZSBUFDQ6A92Q">
                            {" "}
                            Certificate
                          </a>
                          <br />
                          <span>- JavaScript </span>
                          <a href="https://www.coursera.org/account/accomplishments/certificate/4H94TFCXYW76">
                            {" "}
                            Certificate
                          </a>
                          <br />
                          <span>- Advanced Styling with Responsive Design</span>
                          <a href="https://www.coursera.org/account/accomplishments/certificate/BVJMZTSWTS8Q">
                            {" "}
                            Certificate
                          </a>
                          <br />
                          <span>- Web Design for Everybody Capstone</span>
                          <a href="https://www.coursera.org/account/accomplishments/certificate/4H94TFCXYW76">
                            {" "}
                            Certificate
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            31th International Massive Swimming
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2014 Aug</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>
                            {" "}
                            Across Sun Moon Lake activity｜ 3000 meters
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">
                            National Taipei University of Technology
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2010 Sep - 2014 Jun </span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>Bachelor of Science (BSc) </span>
                          <strong> ｜ Department of Industrial Design</strong>
                          <br />
                          <span>Furniture and interior design major</span>
                          <strong>（GPA: 3.3/4.0）</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            2014 Taiwan Design Exhibition
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2014 Jun</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>Invited Exhibition</span>
                          <br />
                          <span>Reported on Central News Agency</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">Yilan Heyi Exhibition </span>
                          <span className="time-wrapper">
                            <span className="time">2014 May</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>
                            Yilan Heyi The Exhibition of Cultural and Creative
                            Industry
                          </span>
                          <span>Invited Exhibition</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            Young Designers' Exhibition (YODEX)
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2014 Apr</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span> Excellence Award</span>
                          <strong> Craft Design</strong>
                          <br />
                          <span>Exhibited in Taipei World Trade Center</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            "Permanent Public Toilets" Competition
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2014 Apr</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>
                            Taitung County "Permanent Public Toilets"
                            Competition
                          </span>
                          <strong>Bronze Award Winner</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">Space Interior Design</span>
                          <span className="time-wrapper">
                            <span className="time">2013 Apr</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>Non-residential Space Interior Design</span>
                          <strong>Winner</strong>
                          <br />
                          <span>Residential Space Interior Design</span>
                          <strong>Winner</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">Kaplan International</span>
                          <span className="time-wrapper">
                            <span className="time">2011 Sep - 2012 Feb</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>AdvancedTOEFLandAcademicEnglishProgram</span>
                          <br />
                          <span>NewYork,USA</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">Senior High School</span>
                          <span className="time-wrapper">
                            <span className="time">2006 Sep - 2009 Jun</span>
                          </span>
                          <div className="desc">
                            {" "}
                            <span>
                              Taipei Municipal Song Shan Senior High School
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-r">
                        <div className="flag-wrapper">
                          <span className="flag">
                            National Student Art Competition
                          </span>
                          <span className="time-wrapper">
                            <span className="time">2006 Jun</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>
                            Graphic Design / Engraving Double Champion
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">Junior High School</span>
                          <span className="time-wrapper">
                            <span className="time">2003 Sep - 2006 Jun</span>
                          </span>
                        </div>
                        <div className="desc">
                          <span>
                            Taipei Municipal Jinhua Junior High School{" "}
                          </span>
                          <span>Courses for the gifted in art</span>
                          <br />
                          <span>
                            Major in Sketch / Watercolor / Chinese Painting /
                            Calligraphy / Printmaking / Sculpture
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="direction-l">
                        <div className="flag-wrapper">
                          <span className="flag">Elementary School</span>
                          <span className="time-wrapper">
                            <span className="time">1999 Sep - 2003 Jun</span>
                          </span>
                        </div>
                        <div className="desc">
                          {" "}
                          <span>
                            Taipei Municipal Gu Ting Elementary School
                          </span>
                          <span>Courses for the gifted in music</span>
                          <br />
                          <span>Major in piano / Minor in French Horn</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="overlay" id="yolomoto-biketire-3d">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio1()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">
                    Zion Grotto Road Tire
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>3D Modeling / 3D Redering</span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Alias / Showcase / Photoshop</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Nov 2016</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>Yolomoto Co., Ltd.</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-biketire.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-tirerender-1.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-tirerender-2.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-tirerender-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="yolomoto-biketire-movie">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio2()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="singlepage">
                  <video width="100%" controls="">
                    {/* <source src="img/movie.mp4" type="video/mp4" /> */}
                  </video>
                </div>
                <div className="overlay-content">
                  <div className="overlay-content-title">
                    Zion Grotto Road Tire
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>3D Animation</span>
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Affter Effect / Illustration</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Dec 2016</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>Yolomoto Co., Ltd.</span>
                  </div>
                </div>
              </div>
              <div className="overlay" id="yolomoto-biketire-icons">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio3()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">
                    Zion Grotto Road Tire
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Icon & Business Card / SVG Animation</span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Illustration / Css3 @Keyframes</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Oct 2016</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>Yolomoto Co., Ltd.</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-businesscard.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-icon-1.svg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-icon-2.svg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-icon-3.svg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/yolomoto-icon-4.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="pypat-dm">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio4()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">PyPat IP Services</div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>tri-fold brochure / DM / Envelope</span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Illustration / Photoshop</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Oct 2015</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>PyPat IP Services Co., Ltd.</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-slide-85">
                        <img src="img/pypat-dm-cover.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/pypat-dm-inside.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/pypat-envelope.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="pypat-web">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio5()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">PyPat IP Services</div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Website </span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Html5 / Css3 / Illustration</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Jul 2015</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>PyPat IP Services Co., Ltd.</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/pypat-web.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/pypat-web2.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/pypat-web3.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/pypat-web5.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/pypat-web4.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-60">
                        {" "}
                        <img src="img/pypat-mockup.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="ntust-patent">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio6()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">
                    APAA & NTUST Patent Conference
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Poster / DM / Banner / Manual </span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Illustration / Photoshop</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Feb 2016</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>
                      National Taiwan University of Science and Technology
                    </span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-slide-40">
                        <img src="img/ntust-poster.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/ntust-manual.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/ntust-banner.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/ntust-namecard1.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/ntust-namecard3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="yodex-l">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio7()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  {" "}
                  <a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw">
                    <div className="overlay-content-title">藺一伴 Sew Mate</div>
                  </a>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Industrial Desgin / Taiwan Handicraft</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Apr 2014</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true">
                      {" "}
                    </i>
                    <a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw">
                      <span>
                        Young Designers' Exhibition (YODEX) - Craft Design
                      </span>
                    </a>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true">
                      {" "}
                    </i>
                    <a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw">
                      <span>
                        Yilan Heyi The Exhibition of Cultural and Creative
                        Industry
                      </span>
                    </a>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true">
                      {" "}
                    </i>
                    <a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw">
                      <span>
                        2014 Taiwan Design Exhibition - Invited Exhibition -
                        Reported on Central News Agency
                      </span>
                    </a>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/l-001.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/l-作品照片-01.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/l-作品照片-02.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/l-003.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/l-004.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/l-005.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/l-008.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="yodex-h">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio8()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">
                    聽見空間 Hearing Spaces
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Interior Desgin</span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>3Ds Max / V-ray Rendering</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Apr 2014</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>
                      Young Designers' Exhibition (YODEX) Interior Design
                    </span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>IF Award Interior Design</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/h-009.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/h-010.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/h-011.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/h-作品照片-01.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/h-012.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/h-作品照片-02.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/h-013.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/h-作品照片-03.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/h-014.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/h-作品照片-04.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/h-作品照片-05.jpg" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-85">
                        {" "}
                        <img src="img/h-015.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/h-modal-pond.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/h-modal-stairs.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/h-modal-garden.jpg" alt="" />
                      </div>
                    </div>

                    <div className="swiper-pagination" />

                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="waterfulart">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio9()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">
                    水藝醫美 Waterful Art
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Interior Desgin</span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>3Ds Max / V-ray Rendering</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Jun 2013</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>Non-residential Space Interior Design Winner</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-01.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-02.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-03.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-04.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-05.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-06.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-07.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-08.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-09.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-10.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-11.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-12.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-13.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-14.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-15.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-16.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-17.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-18.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-19.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-20.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-21.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-22.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-23.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-24.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-25.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-26.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-27.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-28.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-29.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-30.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-31.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-32.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        {" "}
                        <img src="img/w-33.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-34.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-35.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-36.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-37.png" alt="" />
                      </div>
                      <div className="swiper-slide swiper-slide-120">
                        <img src="img/w-38.png" alt="" />
                      </div>
                    </div>

                    <div className="swiper-pagination" />

                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="patent-contest">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio10()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  <div className="overlay-content-title">
                    A Study of Patent Portfolios and Technology Development on
                    Wireless Power Charging{" "}
                  </div>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>
                      2016 Patent Analysis and Development Competition{" "}
                    </span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>USPTO/ EPO </span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Aug 2016</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>Excellent Award</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src="img/p-01.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-02.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-03.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-04.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-05.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-06.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-07.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-08.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-09.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-10.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-11.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-12.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-13.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-14.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-15.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-16.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-17.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-18.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-19.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-20.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-21.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-22.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-23.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-24.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-25.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-26.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-27.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-28.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-29.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-30.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-31.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-32.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/p-33.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-34.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-35.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-36.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-37.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-38.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-39.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="img/p-40.jpg" alt="" />
                      </div>
                    </div>

                    <div className="swiper-pagination" />

                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="overlay" id="aurora">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio11()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  {" "}
                  <a href="https://theta360.com/s/hbXiViW7ZnpSkG5hRtyof2k4W">
                    <div className="overlay-content-title">
                      Aurora Photography
                    </div>
                  </a>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Iceland Aurora</span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Ricoh Theta Sc / 360° Panorama</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Jan 2017</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>360° Panorama Aurora Photography</span>
                  </div>
                </div>
                <div className="overlay-pic">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src="img/aurora.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img src="img/aurorawide.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay" id="travel">
                <a
                  className="closebtn"
                  onClick={() => this.closePortfolio12()}
                  href="http://google.com"
                >
                  <div className="burger">
                    <div className="burger-menu open">
                      <div className="bar1" />
                      <div className="bar2" />
                      <div className="bar3" />
                    </div>
                  </div>
                </a>
                <div className="overlay-content">
                  {" "}
                  <a href="https://theta360.com/s/hbXiViW7ZnpSkG5hRtyof2k4W">
                    <div className="overlay-content-title">
                      Pingxi Travellers Lodge
                    </div>
                  </a>
                  <div className="overlay-content-skill">
                    {" "}
                    <i className="fa fa-tags" aria-hidden="true" />
                    <span>Business Card / DM </span>
                  </div>
                  <div className="overlay-content-software">
                    {" "}
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span>Illustration / Photoshop</span>
                  </div>
                  <div className="overlay-content-time">
                    {" "}
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span>Feb 2016</span>
                  </div>
                  <div className="overlay-content-client">
                    <i className="fa fa-handshake-o" aria-hidden="true" />
                    <span>Pingxi Travellers Lodge</span>
                  </div>
                </div>
                <OverlayPic />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const OverlayPic = () => (
  <div className="overlay-pic">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="img/travel-businesscard-cover.jpg" alt="" />
        </div>
        <div className="swiper-slide">
          {" "}
          <img src="img/travel-businesscard-name.jpg" alt="" />
        </div>
        <div className="swiper-slide swiper-slide-85">
          {" "}
          <img src="img/travel-map.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
);

// const App = () => <div>Hello</div>
export default App;
