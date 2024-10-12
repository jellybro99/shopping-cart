import PropTypes from "prop-types";
import { useRef } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

function Modal(props) {
    const { children, close } = props;
    const modalRef = useRef();

    const handleClick = (e) => {
        if (e.target == modalRef.current) close();
    };

    return (
        <ModalContainer onClick={(e) => handleClick(e)} ref={modalRef}>
            {children}
        </ModalContainer>
    );
}

Modal.propTypes = {
    children: PropTypes.element,
    close: PropTypes.func,
};

export default Modal;
