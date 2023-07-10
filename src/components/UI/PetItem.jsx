import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/pet-item.css";

const PetItem = (props) => {
  const { imgUrl, model, petName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="pet__item">
        <div className="pet__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="pet__item-content mt-4">
          <h4 className="section__title text-center">{petName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="pet__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="fa fa-paw"></i> {model}
            </span>
            {/* <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span> */}
            <span className=" d-flex align-items-center gap-1">
              <i class="fa fa-pagelines"></i> {speed}
            </span>
          </div>

          <button className=" w-50 pet__item-btn pet__btn-rent">
            <Link to={`/pets/${petName}`}>Rent</Link>
          </button>

          <button className=" w-50 pet__item-btn pet__btn-details">
            <Link to={`/pets/${petName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default PetItem;
