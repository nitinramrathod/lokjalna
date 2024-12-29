import BTOffcanvas from "react-bootstrap/Offcanvas";
function Offcanvas({ title="Title", show, handleClose, children}) {

  return (
    <>
      <BTOffcanvas show={show} onHide={handleClose} placement="end">
        <BTOffcanvas.Header closeButton>
          <BTOffcanvas.Title>{title}</BTOffcanvas.Title>
        </BTOffcanvas.Header>
        <BTOffcanvas.Body>
          {children}
        </BTOffcanvas.Body>
      </BTOffcanvas>
    </>
  );
}

export default Offcanvas;
