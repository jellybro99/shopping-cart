import styled from "styled-components";

const StyledImage = styled.img`
    max-height: 100%;
`;

function Image(props) {
    //can add alt image for load
    return <StyledImage {...props} loading="lazy" />;
}

export default Image;
