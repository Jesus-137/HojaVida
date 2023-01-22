function Img({style, foto, info}) {
    return (
        <img className={style} src={foto} alt={info}/>
    );
}

export default Img;