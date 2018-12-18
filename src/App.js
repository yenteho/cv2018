import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/style.sass'
import './css/swiper.min.css'
// import './js/common'
// import './js/common.origin'
// import './js/jquery.filterizr.min.js'
// import './js/jquery.min.js'
// import './js/swiper.jquery.min.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body><div id="wrapper"> 
        <header class="col-12" id="header">
          <div class="header-wrapper" onclick="change(this)">
            <div class="burger is--hide" id="trigger">
              <div class="burger-menu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </div>
            <div class="nav_logo"><a href="#">
                <embed src="img/logo.svg" type="" />></a></div>
            <div class="nav_search"></div>
            <div class="nav_list" id="show"> 
              <ul><a href="mailto:ythoworkfun@gmail.com">
                  <li><i class="fa fa-envelope-o" aria-hidden="true"></i></li></a></ul>
            </div>
          </div>
        </header>
        <div class="row col-12"></div>
        <section id="intro">
          <div class="info-wrapper"></div>
        </section>
        <div class="row"></div>
        <section id="portfolio">
          <div class="portfolio-wrapper">
            <ul class="portfolio_filter">
              <div class="closebtn burger is--hide">
                <div class="burger-menu open">
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
                </div>
              </div>
              <li class="about active" data-filter="all"><i class="fa fa-home" aria-hidden="true"></i></li>
              <li class="portfolio" data-filter="100">Portfolio</li>
              <li class="portfolio-list" data-filter="2">Product & Animation</li>
              <li class="portfolio-list" data-filter="3">Web & Graphic</li>
              <li class="portfolio-list" data-filter="4">Awards</li>
              <li class="portfolio-list" data-filter="5">Patent Analysis Award</li>
              <li class="portfolio-list" data-filter="6">Selected Projects</li>

              <li class="search-row"><i class="fa fa-search" aria-hidden="true"></i>
                <input type="text" name="filtr-search" data-search="" />>
              </li>
            </ul>
            <div class="device col-8">
              <div class="device_screen" id="device_screen">
                <div class="filtr-container">
                  <div class="filtr-item who" data-category="1" data-sort="" onclick="openCv1()"><img src="" alt=""></img><span>About</span></div>
                  <div class="filtr-item who" data-category="1" data-sort="" onclick="openCv2()"><img src="" alt=""></img><span>Professional Experience</span></div>
                  <div class="filtr-item" data-category="2, 100" data-sort="" onclick="openPortfolio1()"><img src="" alt=""></img><span>Zion Grotto Road Tire - 3D Model</span></div>
                  <div class="filtr-item" data-category="2, 100" data-sort="" onclick="openPortfolio2()"><img src="" alt=""></img><span>Zion Grotto Road Tire - 3D Animation</span></div>
                  <div class="filtr-item" data-category="2, 100" data-sort="" onclick="openPortfolio3()"><img src="" alt=""></img><span>Zion Grotto Road Tire - Icons & Business Card</span></div>
                  <div class="filtr-item" data-category="3, 100" data-sort="" onclick="openPortfolio4()"><img src="" alt=""></img><span>Pypat IP Service Co., - Brochues </span></div>
                  <div class="filtr-item" data-category="3, 100" data-sort="" onclick="openPortfolio5()"><img src="" alt=""></img><span>Pypat IP Service Co., - Website</span></div>
                  <div class="filtr-item" data-category="3, 100" data-sort="" onclick="openPortfolio6()"><img src="" alt=""></img><span>APAA Conferance - Poster / Manual</span></div>
                  <div class="filtr-item" data-category="4, 100" data-sort="" onclick="openPortfolio7()"><img src="" alt=""></img><span>Young Designers' Exhibition Award - Rush Handicraft</span></div>
                  <div class="filtr-item" data-category="4, 100" data-sort="" onclick="openPortfolio8()"><img src="" alt=""></img><span>Young Designers' Exhibition Award - Interior Design</span></div>
                  <div class="filtr-item" data-category="4, 100" data-sort="" onclick="openPortfolio9()"><img src="" alt=""></img><span> Non-residential Space Interior Design Winner</span></div>
                  <div class="filtr-item" data-category="5, 100" data-sort="" onclick="openPortfolio10()"><img src="" alt=""></img><span>2016 Patent Analysis and Development Competition </span></div>
                  <div class="filtr-item" data-category="6, 100" data-sort="" onclick="openPortfolio11()"><img src="" alt=""></img><span>360° Panorama Aurora Photography</span></div>
                  <div class="filtr-item" data-category="6, 100" data-sort="" onclick="openPortfolio12()"><img src="" alt=""></img><span>Pingxi Travellers Lodge</span></div>
                  <div class="filtr-item more" data-category="1, 2, 3, 4, 5, 6" data-sort=""><img src="" alt=""></img><span>More...</span></div>
                </div>
              </div>
              <div class="menubtn"></div>
              <div class="overlay" id="cv1"><a class="closebtn" onclick="closeCv1()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="intro">
                  <div class="intro-photo"><img src="img/photo.jpg" alt=""></img></div>
                  <div class="intro-content">
                    <h4>Hi, I'm YenTe Ho (何妍德),</h4><br />
                    <h5>IT consultant with 3+ years of experience, specialty in UI design, micro-interactions, UX research and front-end development for digital gaming, e-commerce and startup.</h5><br />
                    <div class="button" id="modalbtn">Skills of Design </div>
                    <div class="modal" id="modalbox">
                      <div class="modal-content">
                        <ul>
                          <li>
                            <h4>Front-end Web Developement</h4>
                            <h5>Optimize web performance by building cross-platform, cross-browser and RWD solutions in desktop, tablet and mobile.</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>HTML5(Pug), CSS3(sass), JQuery, JavaScript</h6>
                            </div>
                          </li>
                          <li> 
                            <h4>UI Design / Interaction Design</h4>
                            <h5>Proficient at prototyping, creating and developing design assets included wireframes, user flows, iconography, and high-fidelity mockups.</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>Sketch, Adobe XD</h6>
                            </div>
                          </li>
                          <li> 
                            <h4>UX Research</h4>
                            <h5>Ability to plan and execute usability testing and incorporate user feedback into final product design.</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>Sketch, Adobe XD</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Industrial Design</h4>
                            <h5>producing prototypes / Alias 3D Modeling / Showcase 3D Rendering</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>Alias, AutoCad 2D, AutoCad3D, Showcase</h6>
                            </div>
                          </li>
                          <li>
                            <h4>3D Animation</h4>
                            <h5>Titles and opticals design, music, animation editing and post-production</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>After Effects, Blender, Photoshop  </h6>
                            </div>
                          </li>
                          <li>
                            <h4>Comercial Design</h4>
                            <h5>CIS Design, Logo, Business Card, Brochures, DM</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>Photoshop, Illustrator, Lightroom, Painter</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Interior Design</h4>
                            <h5>3dsMas 3D Modeling，Vray lighting Rendering, Plan-elevation-section Drawing</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>3Ds MAX, Vray, Sketch up, AutoCad 2D</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Design Competition</h4>
                            <h5>ＩＦ, Reddot Competition</h5>
                          </li>
                        </ul><span class="back close">Back</span>
                      </div>
                    </div>
                    <div class="button" id="modalbtn1">Skills of Patent</div>
                    <div class="modal" id="modalbox1">
                      <div class="modal-content">
                        <ul>
                          <li>
                            <h4>Patent Search</h4>
                            <h5>Utilizing variety of global patent databases such as USPTO, EPO, TPO, JPO, CPO, Thomson Reuters, WIPS, MTrends, LexisNexis, to search technical documents</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>USPTO, EPO, TPO, JPO, CPO</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Patent Analysis</h4>
                            <h5>Creating the technology/function matrix for technology forecasting</h5>
                            <div class="skill"><i class="fa fa-wrench" aria-hidden="true"> </i>
                              <h6>Thomson  Reuters, WIPS, MTrends, LexisNexis</h6>
                            </div>
                          </li>
                          <li>
                            <h4>Office Action reply</h4>
                            <h5>Comparing the prior art with written description and claim language to consider the best solution to solve the Unity / Novelty / Inventive problems, etc</h5>
                          </li>
                          <li>
                            <h4>Translation</h4>
                            <h5>Translating technical documents from and into English and Chinese</h5>
                          </li>
                        </ul><span class="back1 close">Back</span>
                      </div>
                    </div><br />
                  </div>
                  <div class="contact">
                    <ul><a href="mailto:ythoworkfun@gmail.com">
                        <li><i class="fa fa-envelope-o" aria-hidden="true"></i></li></a><a href="tel:0958-941-898">
                        <li><i class="fa fa-phone" aria-hidden="true"></i></li></a><a href="https://www.linkedin.com/in/yente-ho-b616baa1/">
                        <li><i class="fa fa-linkedin" aria-hidden="true"></i></li></a><a href="https://github.com/yenteho">
                        <li><i class="fa fa-github" aria-hidden="true"></i></li></a><a href="https://codepen.io/yenteho/">
                        <li><i class="fa fa-codepen" aria-hidden="true"></i></li></a></ul>
                  </div><a class="download" href="https://www.dropbox.com/s/szjynzcxqkkkuxw/%E4%BD%95%E5%A6%8D%E5%BE%B7Resume%20201705.pdf?dl=0"> Download my CV                </a><br />
                </div>
              </div>
              <div class="overlay" id="cv2"><a class="closebtn" onclick="closeCv2()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="timline-wrapper">
                  <ul class="timeline">
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">Xuenn Pte Ltd. </span><span class="time-wrapper"><span class="time">2017 Jul- Present</span></span></div>
                        <div class="desc left"> <span>- Implemented enhancing and supporting the current 188bet, TouTou, Rich88 and V9BET Sports Website included Desktop, Mobile and Tablet products.</span><br /><span>-Executed and translated high-level requirements of visual design performances using HTML(Pug) and CSS(SASS) into precise, intuitive, and functional user interfaces.</span><br /><span>- Restructured HTML and CSS(SASS) with Webpack as Responsive web design for 2018 World Cup.</span><br /><span>- Created icon-fonts which customized for 4 brands to replace the previous sprite image system for optimize file size. </span><br /><span>- Negotiated and coordinated between users and developers to check the final layouts, interactions and functions in Axure, Sketch and Zeplin.</span><br /><span>- Tested front-end code in multiple browsers to ensure cross-browser compatibility.</span><br /><span>- Went to Philippines on business for discussing and planning the new projects.</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Rapaq Ltd.</span><span class="time-wrapper"><span class="time">2017 Mar- 2017 May</span></span></div>
                        <div class="desc left"> <span>- Used HTML, CSS(SCSS), JavaScript and jQuery to create user-friendly web pages for E-commerce and local social media.  </span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Yolomoto Co., Ltd.</span><span class="time-wrapper"><span class="time">2016 Sep - 2017 Feb</span></span></div>
                        <div class="desc left"> <span>- Graphic Designer/ Industrial Designer/ Animation Designer/ Web Designer  </span><br /><strong>Graphic Design：</strong><span> Used Adobe Graphic software as Photoshop and Illustrator to design Logo, business card and Brochures</span><br /><strong>- Industrial Design：</strong><span>Used Alias and Autodesk Showcase to make bike tire modeling and rendering</span><br /><strong>- Multimedia Design / Animation Design：</strong><span>Used Blender and After Effects to build 3D models and animation films</span><br /><span>Designed and developed business website for start-up company</span><br /><span>Used HTML5, CSS3, JavaScript and Bootstrap3, JQuery to make user interface</span><br /><span>Consulted on various materials and design techniques for new product lines and trade show displays</span><br /><span>Attended red-dot design competition</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">Master Degree</span><span class="time-wrapper"><span class="time">2014 Sep - 2016 Jun</span></span></div>
                        <div class="desc"><span>National Taiwan University of Science and Technology </span><span>College of Intellectual Property Studies   </span><strong>Graduate Institute of Patent</strong><br /><strong>（GPA: 4.0/4.0）</strong></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Boehmert & Boehmert</span><span class="time-wrapper"><span class="time">2016 Mar - 2016 Jun </span></span></div>
                        <div class="desc"> <span> Patent Engineer Intern   </span><strong>｜  Munich, Germany</strong><br /><span>-	Received specialized training in patent searching, analysis and drafting of EPO</span><br /><span>-	Compared the prior art with written description and claim language mentioned by examiner carefully</span><br /><span>-	Discussed with clients to consider the best solution to solve the Unity / Novelty / Inventive problems</span><br /><span>-	Drafted EPO Office Action reply including novelty and inventive steps under the European Patent Convention</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Mt. Jade Mountain Climbing </span><span class="time-wrapper"><span class="time">2016 Apr</span></span></div>
                        <div class="desc"> <span> 3952 meters high</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">PyPat IP Services Co., Ltd.  </span><span class="time-wrapper"><span class="time">2015 Jul - 2016 Jan</span></span></div>
                        <div class="desc"> <span>Patent Analysis Intern  </span><br /><span>-	Translated technical documents and data from Chinese to English</span><br /><span>-	Utilized variety of global patent databases to develop a new patent searching system</span><br /><span>-	Designed user interface of the patent searching system</span><br /><span>-	Communicated with clients to optimize IP strategies</span><br /><span>-	Provided the technology/function matrix for technology forecasting</span><br /><span>-	Helped craft legal opinions on ownership, inventorship, infringement, and validity issues</span><br /><span>-	Designed DM/Quotation Form</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">New York Model United Nations</span><span class="time-wrapper"><span class="time">2015 Apr</span></span></div>
                        <div class="desc"><span>Attended UNEP conference and acted as a delegate of Seychelles</span><br /><span>On the topic of “Promoting Resource Efficiency in Urban Development”</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Pan Asia Model United Nations </span><span class="time-wrapper"><span class="time">2014 Nov</span></span></div>
                        <div class="desc"><span>Attended UNODC conference and acted as a delegate of Kuwait</span><br /><span>On the topic of “Substance abuse treatment and care for women”  </span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Bachelor Degree</span><span class="time-wrapper"><span class="time">2015 Sep - 2016 Jan</span></span></div>
                        <div class="desc"> <span>National Taiwan University of Science and Technology</span><span>US Patent Practice / Patent Litigation / Claim Interpretation of Patents</span><strong>Teaching Assistant</strong></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Cycling around Taiwan </span><span class="time-wrapper"><span class="time">2015 Aug</span></span></div>
                        <div class="desc"> <span> ｜ 9 days / 590 miles</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">Coursera | University of Michigan</span><span class="time-wrapper"><span class="time">2015 Nov - 2017 Feb</span></span></div>
                        <div class="desc"> <span>- HTML5</span><a href="https://www.coursera.org/account/accomplishments/certificate/BDSND8Q8T47A"> Certificate</a><br /><span>- CSS3 </span><a href="https://www.coursera.org/account/accomplishments/certificate/ZSBUFDQ6A92Q"> Certificate</a><br /><span>- JavaScript </span><a href="https://www.coursera.org/account/accomplishments/certificate/4H94TFCXYW76"> Certificate</a><br /><span>- Advanced Styling with Responsive Design</span><a href="https://www.coursera.org/account/accomplishments/certificate/BVJMZTSWTS8Q"> Certificate</a><br /><span>- Web Design for Everybody Capstone</span><a href="https://www.coursera.org/account/accomplishments/certificate/4H94TFCXYW76"> Certificate</a></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">31th International Massive Swimming</span><span class="time-wrapper"><span class="time">2014 Aug</span></span></div>
                        <div class="desc"> <span> Across Sun Moon Lake activity｜ 3000 meters</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">National Taipei University of Technology</span><span class="time-wrapper"><span class="time">2010 Sep - 2014 Jun </span></span></div>
                        <div class="desc"> <span>Bachelor of Science (BSc)   </span><strong> ｜ Department of Industrial Design</strong><br /><span>Furniture and interior design major</span><strong>（GPA: 3.3/4.0）</strong></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">2014 Taiwan Design Exhibition</span><span class="time-wrapper"><span class="time">2014 Jun</span></span></div>
                        <div class="desc"> <span>Invited Exhibition</span><br /><span>Reported on Central News Agency</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Yilan Heyi Exhibition </span><span class="time-wrapper"><span class="time">2014 May</span></span></div>
                        <div class="desc"> <span>Yilan Heyi The Exhibition of Cultural and Creative Industry</span><span>Invited Exhibition</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Young Designers' Exhibition (YODEX)</span><span class="time-wrapper"><span class="time">2014 Apr</span></span></div>
                        <div class="desc"> <span> Excellence Award</span><strong> Craft Design</strong><br /><span>Exhibited in Taipei World Trade Center</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">"Permanent Public Toilets" Competition</span><span class="time-wrapper"><span class="time">2014 Apr</span></span></div>
                        <div class="desc"> <span>Taitung County "Permanent Public Toilets" Competition</span><strong>Bronze Award Winner</strong></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">Space Interior Design</span><span class="time-wrapper"><span class="time">2013 Apr</span></span></div>
                        <div class="desc"> <span>Non-residential Space Interior Design</span><strong>Winner</strong><br /><span>Residential Space Interior Design</span><strong>Winner</strong></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">Kaplan International</span><span class="time-wrapper"><span class="time">2011 Sep - 2012 Feb</span></span></div>
                        <div class="desc"> <span>AdvancedTOEFLandAcademicEnglishProgram</span><br /><span>NewYork,USA</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">Senior High School</span><span class="time-wrapper"><span class="time">2006 Sep - 2009 Jun</span></span>
                          <div class="desc"> <span>Taipei Municipal Song Shan Senior High School</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-r">
                        <div class="flag-wrapper"><span class="flag">National Student Art Competition</span><span class="time-wrapper"><span class="time">2006 Jun</span></span></div>
                        <div class="desc"> <span>Graphic Design / Engraving Double Champion</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">Junior High School</span><span class="time-wrapper"><span class="time">2003 Sep - 2006 Jun</span></span></div>
                        <div class="desc"><span>Taipei Municipal Jinhua Junior High School </span><span>Courses for the gifted in art</span><br /><span>Major in Sketch / Watercolor / Chinese Painting / Calligraphy / Printmaking / Sculpture</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="direction-l">
                        <div class="flag-wrapper"><span class="flag">Elementary School</span><span class="time-wrapper"><span class="time">1999 Sep - 2003 Jun</span></span></div>
                        <div class="desc"> <span>Taipei Municipal Gu Ting Elementary School</span><span>Courses for the gifted in music</span><br /><span>Major in piano / Minor in French Horn</span></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="overlay" id="yolomoto-biketire-3d"><a class="closebtn" onclick="closePortfolio1()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">Zion Grotto Road Tire</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>3D Modeling / 3D Redering</span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>Alias / Showcase / Photoshop</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Nov 2016</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>Yolomoto Co., Ltd.</span></div>
                </div>
                <div class="overlay-pic">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide"> <img src="img/yolomoto-biketire.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/yolomoto-tirerender-1.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/yolomoto-tirerender-2.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/yolomoto-tirerender-3.jpg" alt=""></img></div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="yolomoto-biketire-movie"><a class="closebtn" onclick="closePortfolio2()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="singlepage">
                  <video width="100%" controls="">
                    <source src="img/movie.mp4" type="video/mp4" />>
                  </video>
                </div>
                <div class="overlay-content">
                  <div class="overlay-content-title">Zion Grotto Road Tire</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>3D Animation</span></div>
                  <div class="overlay-content-skill"> <i class="fa fa-cog" aria-hidden="true"></i><span>Affter Effect / Illustration</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Dec 2016</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>Yolomoto Co., Ltd.</span></div>
                </div>
              </div>
              <div class="overlay" id="yolomoto-biketire-icons"><a class="closebtn" onclick="closePortfolio3()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">Zion Grotto Road Tire</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Icon & Business Card / SVG Animation</span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>Illustration / Css3 @Keyframes</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Oct 2016</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>Yolomoto Co., Ltd.</span></div>
                </div>
                <div class="overlay-pic">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide"> <img src="img/yolomoto-businesscard.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/yolomoto-icon-1.svg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/yolomoto-icon-2.svg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/yolomoto-icon-3.svg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/yolomoto-icon-4.svg" alt=""></img></div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="pypat-dm"><a class="closebtn" onclick="closePortfolio4()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">PyPat IP Services</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>tri-fold brochure / DM / Envelope</span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>Illustration / Photoshop</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Oct 2015</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>PyPat IP Services Co., Ltd.</span></div>
                </div>
                <div class="overlay-pic">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiper-slide-85"><img src="img/pypat-dm-cover.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/pypat-dm-inside.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/pypat-envelope.jpg" alt=""></img></div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="pypat-web"><a class="closebtn" onclick="closePortfolio5()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">PyPat IP Services</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Website </span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>Html5 / Css3 / Illustration</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Jul 2015</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>PyPat IP Services Co., Ltd.</span></div>
                </div>
                <div class="overlay-pic">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">                     <img src="img/pypat-web.jpg" alt=""></img></div>
                      <div class="swiper-slide">                     <img src="img/pypat-web2.jpg" alt=""></img></div>
                      <div class="swiper-slide">                     <img src="img/pypat-web3.jpg" alt=""></img></div>
                      <div class="swiper-slide">                     <img src="img/pypat-web5.jpg" alt=""></img></div>
                      <div class="swiper-slide">                     <img src="img/pypat-web4.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-60"> <img src="img/pypat-mockup.jpg" alt=""></img></div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="ntust-patent"><a class="closebtn" onclick="closePortfolio6()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">APAA & NTUST Patent Conference</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Poster / DM / Banner / Manual </span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>Illustration / Photoshop</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Feb 2016</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>National Taiwan University of Science and Technology</span></div>
                </div>
                <div class="overlay-pic">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiper-slide-40"><img src="img/ntust-poster.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/ntust-manual.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/ntust-banner.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/ntust-namecard1.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/ntust-namecard3.jpg" alt=""></img></div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="yodex-l"><a class="closebtn" onclick="closePortfolio7()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> <a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw">
                    <div class="overlay-content-title">藺一伴 Sew Mate</div></a>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Industrial Desgin / Taiwan Handicraft</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Apr 2014</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"> </i><a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw"><span>Young Designers' Exhibition (YODEX) - Craft Design</span></a></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"> </i><a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw"><span>Yilan Heyi The Exhibition of Cultural and Creative Industry</span></a></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"> </i><a href="http://wwwid.ntut.edu.tw/files/14-1056-44977,r162-1.php?Lang=zh-tw"><span>2014 Taiwan Design Exhibition - Invited Exhibition - Reported on Central News Agency</span></a></div>
                </div>
                <div class="overlay-pic">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiper-slide-85"> <img src="img/l-001.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/l-作品照片-01.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/l-作品照片-02.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/l-003.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/l-004.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/l-005.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/l-008.jpg" alt=""></img></div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="yodex-h"><a class="closebtn" onclick="closePortfolio8()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">聽見空間 Hearing Spaces</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Interior Desgin</span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>3Ds Max / V-ray Rendering</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Apr 2014</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>Young Designers' Exhibition (YODEX) Interior Design</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>IF Award Interior Design</span></div>
                </div>
                <div class="overlay-pic">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiper-slide-85"> <img src="img/h-009.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/h-010.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/h-011.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/h-作品照片-01.jpg" alt=""></img></div>
                      <div class="swiper-slide">                    <img src="img/h-012.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/h-作品照片-02.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/h-013.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/h-作品照片-03.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/h-014.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/h-作品照片-04.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/h-作品照片-05.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/h-015.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/h-modal-pond.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/h-modal-stairs.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/h-modal-garden.jpg" alt=""></img></div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                    
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="waterfulart"><a class="closebtn" onclick="closePortfolio9()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">水藝醫美 Waterful Art</div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Interior Desgin</span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>3Ds Max / V-ray Rendering</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Jun 2013</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>Non-residential Space Interior Design Winner</span></div>
                </div>
                <div class="overlay-pic">
                  
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-01.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-02.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-03.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-04.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-05.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120">                    <img src="img/w-06.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-07.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-08.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-09.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-10.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-11.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-12.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-13.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-14.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-15.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-16.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-17.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-18.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-19.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-20.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-21.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-22.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-23.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-24.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-25.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-26.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-27.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-28.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-29.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-30.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-31.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-32.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"> <img src="img/w-33.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-34.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-35.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-36.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-37.png" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-120"><img src="img/w-38.png" alt=""></img></div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                    
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="patent-contest"><a class="closebtn" onclick="closePortfolio10()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> 
                  <div class="overlay-content-title">A Study of Patent Portfolios and Technology Development on Wireless Power Charging </div>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>2016 Patent Analysis and Development Competition </span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>USPTO/ EPO </span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Aug 2016</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>Excellent Award</span></div>
                </div>
                <div class="overlay-pic">
                  
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide"><img src="img/p-01.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-02.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-03.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-04.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-05.jpg" alt=""></img></div>
                      <div class="swiper-slide">                    <img src="img/p-06.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-07.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-08.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-09.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-10.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-11.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-12.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-13.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-14.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-15.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-16.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-17.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-18.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-19.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-20.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-21.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-22.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-23.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-24.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-25.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-26.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-27.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-28.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-29.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-30.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-31.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-32.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/p-33.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-34.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-35.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-36.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-37.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-38.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-39.jpg" alt=""></img></div>
                      <div class="swiper-slide"><img src="img/p-40.jpg" alt=""></img></div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                    
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="aurora"><a class="closebtn" onclick="closePortfolio11()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> <a href="https://theta360.com/s/hbXiViW7ZnpSkG5hRtyof2k4W">
                    <div class="overlay-content-title">Aurora Photography</div></a>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Iceland Aurora</span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>Ricoh Theta Sc /  360° Panorama</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Jan 2017</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>360° Panorama Aurora Photography</span></div>
                </div>
                <div class="overlay-pic">
                  
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide"><img src="img/aurora.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/aurorawide.jpg" alt=""></img></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overlay" id="travel"><a class="closebtn" onclick="closePortfolio12()"> 
                  <div class="burger">
                    <div class="burger-menu open">
                      <div class="bar1"></div>
                      <div class="bar2"></div>
                      <div class="bar3"></div>
                    </div>
                  </div></a>
                <div class="overlay-content"> <a href="https://theta360.com/s/hbXiViW7ZnpSkG5hRtyof2k4W">
                    <div class="overlay-content-title">Pingxi Travellers Lodge</div></a>
                  <div class="overlay-content-skill"> <i class="fa fa-tags" aria-hidden="true"></i><span>Business Card / DM </span></div>
                  <div class="overlay-content-software"> <i class="fa fa-cog" aria-hidden="true"></i><span>Illustration / Photoshop</span></div>
                  <div class="overlay-content-time"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i><span>Feb 2016</span></div>
                  <div class="overlay-content-client"><i class="fa fa-handshake-o" aria-hidden="true"></i><span>Pingxi Travellers Lodge</span></div>
                </div>
                <div class="overlay-pic">
                  
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide"><img src="img/travel-businesscard-cover.jpg" alt=""></img></div>
                      <div class="swiper-slide"> <img src="img/travel-businesscard-name.jpg" alt=""></img></div>
                      <div class="swiper-slide swiper-slide-85"> <img src="img/travel-map.jpg" alt=""></img></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </body>
     
      </div>
    );
  }
}

export default App;
