import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.img`
    //need to figure out how to use props with styled css
    max-height: 100%;
    aspect-ratio: 1/1;
    cursor: ${(props) => props.$cursor || "inherit"};
`;

function Image(props) {
    const { src, cursor, ...ImageProps } = props;
    //can add alt image for load
    return (
        <StyledImage
            $cursor={cursor}
            src={src == "" ? "\\src\\assets\\image-not-found.jpg" : src}
            {...ImageProps}
            loading="lazy"
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    cursor: PropTypes.string,
};

export default Image;
