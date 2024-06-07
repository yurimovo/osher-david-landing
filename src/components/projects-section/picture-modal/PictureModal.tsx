import "./style.scss";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IModalWindow {
	isOpen: boolean;
	handleClose: () => void;
	pictureBig: string;
}

const PictureModal: React.FC<IModalWindow> = ({ isOpen, handleClose, pictureBig }) => {
	return (
		<Modal
			show={isOpen}
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
			className="modal-main"
		>
			<Modal.Header closeButton>
				<Modal.Title>Big picture</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{pictureBig}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
};

export default PictureModal;