import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <section className="header-wrapper py-2">
        <div className="container top-header">
          <div className="row">
            <div className="col-12 text-center">
              <Link to="#">
                We have been working on several voluntary initiatives during the
                COVID-19 pandemic. Check them out
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="nav-wrapper py-2">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-3">
              <img src="/images/logo.png" className="img-fluid" alt="" />
            </div>
            <div className="col-6">
              <ul className="list-unstyled d-flex gap-5">
                <li>Services</li>
                <li>Portfolio</li>
                <li>Company</li>
                <li>Events & Media</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <Link to="#" className="px-5 py-3 text-center">Let's talk<AiOutlineArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
