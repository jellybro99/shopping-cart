import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.img`
    //need to figure out how to use props with styled css
    max-height: 100%;
    aspect-ratio: 1/1;
    cursor: ${(props) => (props.$pointer ? "pointer" : "default")};

    ${(props) =>
        props.$shadow
            ? `
        border: solid gray 1px;
        box-shadow: 0px 0px 10px 0px gray;
            &:hover {
            border-color: #8ace00;
            box-shadow: 0px 0px 10px 0px #8ace00;
    }
    `
            : null}
`;

function Image(props) {
    const { src, pointer, shadow, ...ImageProps } = props;
    //can add alt image for load
    return (
        <StyledImage
            $pointer={pointer}
            $shadow={shadow}
            src={src == "" ? "\\src\\assets\\image-not-found.jpg" : src}
            {...ImageProps}
            loading="lazy"
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    pointer: PropTypes.string,
    shadow: PropTypes.string,
};

export default Image;
