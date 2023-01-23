import Mst from "./Mst";

function Link({lin, style, style2, mensaje}) {
    return (
        <a href={lin} className={style2}><Mst style={style} mensaje={mensaje}/></a>
    );
}

export default Link;