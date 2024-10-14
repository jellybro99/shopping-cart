function Image(props) {
    //can add alt image for load
    return <img {...props} loading="lazy"></img>;
}

export default Image;
