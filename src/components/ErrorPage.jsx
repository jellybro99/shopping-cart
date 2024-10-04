import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/boowomp.png";

const ErrorDiv = styled.div`
        display:flex;
        justify-content:center;
        width:100%;
        height:100%;
`

const ImageStyling = styled.img`
        width:500px;
    `

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <ErrorDiv>
            {error.status == 404? <ImageStyling src={img}/> : <i>{error.statusText || error.message}</i>}
        </ErrorDiv>
    )
}

export default ErrorPage;