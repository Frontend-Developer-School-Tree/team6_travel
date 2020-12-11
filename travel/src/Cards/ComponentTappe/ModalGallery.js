import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react'

const ModalGallery = (props) => {
    console.log("open",props.open)
    const [show,setShow] =useState(props.open);
    const imgs=props.imgs
    const handleClose = () => setShow(false);

    return (
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imgs.map((val, i) => {
            return (
              <>
                <>
                  <div key={i} className="col-sm-3">
                    <img
                      src={val}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </>
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>;
      </>
      )
  };

export default ModalGallery;
