import React, { useEffect } from "react";

import petData from "../assets/data/petData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const PetDetails = () => {
  const { slug } = useParams();

  const singlePetItem = petData.find((item) => item.petName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singlePetItem]);

  return (
    <Helmet title={singlePetItem.petName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singlePetItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="pet__info">
                <h2 className="section__title">{singlePetItem.petName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singlePetItem.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: " #ff00ea" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singlePetItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singlePetItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="fa fa-paw"
                      style={{ color: " #ff00ea" }}
                    ></i>{" "}
                    {singlePetItem.model}
                  </span>
{/* 
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singlepetItem.automatic}
                  </span> */}

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="fa fa-pagelines"
                      style={{ color: " #ff00ea" }}
                    ></i>{" "}
                    {singlePetItem.speed}
                  </span>
                </div>

                {/* <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singlepetItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singlepetItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singlepetItem.brand}
                  </span>
                </div> */}
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PetDetails;
