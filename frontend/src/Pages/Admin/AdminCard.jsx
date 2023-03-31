
import styles from "./Admin.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deletedata, getProduct } from "../../Redux/Admin/action";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

const AdminCard = ({ _id,image, title, price, rating }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    dispatch(deletedata(_id)).then(() => dispatch(getProduct()));
  };

  const handleClick = () => {
    let timerInterval;
    Swal.fire({
      title: "Admin please wait!",
      html: "I will close in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <div id ={styles.component}>
      <div className="paymentCard-cont">
        <div className="paymentCard-info">
          <div className="paymentCard-info-img-div">
            <img  src={image} alt="" />
          </div>
          <div className="paymentCard-info-cont">
            <p>{title}</p>

            <p>
              <span>Style:</span># 4130318350035
            </p>
            <p>
              <span>Color:</span>GREEN
            </p>
            <p>
              <span>Size:</span>XS
            </p>
            <p>
              {" "}
              <span>Fit</span> Standard
            </p>
          </div>
        </div>
        <div>${price}</div>
        <div>{rating}</div>

        <div className="paymentCard-info-qty"></div>
        <div>${price}</div>
      </div>
      <hr style={{ border: "1px solid #5c5c5f" }} />
    </div>
  );
};

export default AdminCard;
