import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.img`
    //need to figure out how to use props with styled css
    max-height: 100%;
    aspect-ratio: 1/1;
    border-radius: 0.5%;
    cursor: ${(props) => (props.$pointer ? "pointer" : "default")};

    ${(props) =>
        props.$shadow
            ? `
        border: solid rgb(10, 10, 10, 0.3) 1px;
        box-shadow: 1px 1px 10px 4px rgb(10, 10, 10, 0.2);
            &:hover {
            border-color: rgb(138,206,0);
            box-shadow: 1px 1px 10px 4px rgb(138, 206 ,0 , 0.5);
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
            src={src == "" ? "/src/assets/image-not-found.jpg" : src}
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
