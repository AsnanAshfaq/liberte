import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import FormControl from "@material-ui/core/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import SearchIcon from "@material-ui/icons/Search";

function Modal_search({ modalOpen, setModal }) {
  const [show, setShow] = useState(modalOpen);

  const handleClose = () => {
    setShow(false);
    setModal(false);
  };

  useEffect(() => {
    console.log("running modal");
  }, []);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-100w"
        style={{
          height: "fit-content",
          width: "100%",
          backgroundColor: "transparent",
        }}
        className="d-flex justify-content-center"
        centered
      >
        <div
          className="d-flex justify-content-center w-100 m-0 p-0 "
          style={{ width: 0, maxWidth: 0 }}
        >
          <Modal.Body
            className="d-flex justify-content-center m-0"
            style={{
              width: "fit-content",
              width: 500,
              backgroundColor: "transparent",
            }}
          >
            <form>
              <div className=" d-flex flex-row">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search any Product"
                  style={{ width: 500, height: "match-parent" }}
                  aria-label="Search any Product"
                  aria-describedby="basic-addon1"
                />
                <div class="input-group-append" style={{ width: 40 }}>
                  <span
                    class="input-group-text m-0 border-0"
                    style={{ padding: 6, backgroundColor: "black" }}
                    id="basic-addon1"
                  >
                    <SearchIcon style={{ fill: "white", fontSize: 25 }} type="submit"/>
                  </span>
                </div>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Modal_search;
