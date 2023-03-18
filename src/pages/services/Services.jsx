import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServicesFetch } from "../../servicesState";
import "./style.scss";

const Services = () => {
  const services = useSelector((state) => state.services.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesFetch());
  }, [dispatch]);

  return (
    <>
      <section className="hero-section-wrapper py-5 mb-5">
        <div className="container hero-main">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4">SERVICES</h2>
              <h1 className="mb-4">
                <span className="d-block">
                  At <span className="blue">NAXA</span>, we work on{" "}
                  <span className="blue">ideas</span>; ideas
                </span>{" "}
                <span className="d-block">
                  that can provide{" "}
                  <span className="blue">simple solutions</span> to
                </span>{" "}
                <span className="blue">complex problems</span>
              </h1>
              <p>
                We work as a team to generate, explore, build and validate
                ideas. We also contextualize innovations around the world to
                find the best fitting solutions to local problems.
              </p>
            </div>
          </div>
          <div className="section-navigator">
            <div className="d-flex text-center justify-content-center">
              <div className="col-1"><a href="#5">Frontier Technology</a></div>
              <div className="col-2"><a href="#6">Training & Capacity building</a></div>
              <div className="col-1"><a href="#4">GIS Mapping & Analysis</a></div>
              <div className="col-2"><a href="#2">Data Collection & Visualization</a></div>
              <div className="col-2"><a href="#1">Creative Graphic Design</a></div>
              <div className="col-2"><a href="#8">ICT & Digital Development Research</a></div>
              <div className="col-2"><a href="#3">Software & Apps Development</a></div>
            </div>
          </div>
        </div>
      </section>
      {services.map((service) => (
        <section key={service.id} id={service.id} className="services-main-wrapper py-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-6 first text-center">
                <img src={service.photo} className="img-fluid w-75" alt="" />
              </div>
              <div className="col-6 second d-flex flex-column gap-2">
                <img src={service.icon} className="img-fluid" alt="" />
                <h3>{service.title}</h3>
                <p>{service.description1}</p>
                <p className="first">{service.description2}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Services;
