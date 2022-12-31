const Img = ([{imgName}, {description}]) => {
    return <img src={'./images/' + {imgName}} alt={description} />
}

export default Img;