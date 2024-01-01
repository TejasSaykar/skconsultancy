import React from 'react'

const FAQ = () => {
  return (
    <>
      <section className="page-title" style={{backgroundImage: "url(/img/images/background/page-title-2.jpg)"}}>
        <div className="pattern-layer" style={{backgroundImage: "url(/img/job5.png)"}}></div>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box centred">
              <h1>FAQ’S</h1>
              <p>Things You Need to Know and We Know You Need</p>
            </div>
            {/* <ul className="bread-crumb clearfix">
              <li><a href="index.html">Home</a></li>
              <li>Employers</li>
              <li>FAQ’S</li>
            </ul> */}
          </div>
        </div>
      </section>

      <section className="faq-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box"><img src="/img/images/resource/faq-1.png" alt=""/></figure>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                        <div className="inner-box">
                            <div className="sec-title">
                                <span className="top-title">Employer Faq’s</span>
                                <h2>You'll Find Answers Here!</h2>
                            </div>
                            <ul className="accordion-box">
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer"></div>
                                        <h5>01. What Kind of Services Offer?</h5>
                                    </div>
                                    <div className="acc-content">
                                        <div className="text">
                                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block active-block">
                                    <div className="acc-btn active">
                                        <div className="icon-outer"></div>
                                        <h5>02. How Do I Start Hiring?</h5>
                                    </div>
                                    <div className="acc-content current">
                                        <div className="text">
                                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                     <div className="acc-btn">
                                        <div className="icon-outer"></div>
                                        <h5>03. What is the Job Approval Process?</h5>
                                    </div>
                                    <div className="acc-content">
                                        <div className="text">
                                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                     <div className="acc-btn">
                                        <div className="icon-outer"></div>
                                        <h5>04. Why is the Job I Posted Not Approved Yet?</h5>
                                    </div>
                                    <div className="acc-content">
                                        <div className="text">
                                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                     <div className="acc-btn">
                                        <div className="icon-outer"></div>
                                        <h5>05. What is the Refund Policy?</h5>
                                    </div>
                                    <div className="acc-content">
                                        <div className="text">
                                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                     <div className="acc-btn">
                                        <div className="icon-outer"></div>
                                        <h5>06. What is Contractual Staffing?</h5>
                                    </div>
                                    <div className="acc-content">
                                        <div className="text">
                                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except obtain some advantage from it? But who has any right.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="clients-style-two" style={{backgroundImage: "url(/img/images/background/clients-1.jpg)"}}>
            <div className="auto-container">
                <div className="title-inner centred">
                    <h2>Need of Highly Qualified HR Personnel or Employment Opportunities</h2>
                    <div className="btn-box">
                        <a href="index-2.html" className="btn-one">Hire</a>
                        <a href="index-2.html" className="btn-two">Apply</a>
                    </div>
                </div>
                {/* <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/img/images/clients/clients-logo-7.png" alt=""/></a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/img/images/clients/clients-logo-8.png" alt=""/></a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/img/images/clients/clients-logo-9.png" alt=""/></a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/img/images/clients/clients-logo-10.png" alt=""/></a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/img/images/clients/clients-logo-11.png" alt=""/></a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html"><img src="/img/images/clients/clients-logo-12.png" alt=""/></a>
                    </figure>
                </div> */}
            </div>
        </section>

    </>
  )
}

export default FAQ
