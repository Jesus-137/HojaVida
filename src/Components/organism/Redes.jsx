import Caption from "../../Components/atoms/Caption";
import Mst from "../atoms/Mst";
import Img from "../atoms/Img";
import facebook from "../../assets/Img/Facebook.png"
import intagram from "../../assets/Img/instagram.png"
import linkedin from "../../assets/Img/linkedin.png";
import "../../assets/Styles/Redes.css"

function Redes() {
    return (
        <div className="contenedor">
                <center><Caption style="caption" mensaje="Redes sociales"/></center>
            <div className="contenedorRedes">
                <div className="divR">
                    <Img style="imgRedes" foto={facebook}/>
                    <Mst style="mstR" mensaje="Facebook"/>
                </div>
                <div className="divR">
                    <Img style="imgRedes" foto={intagram}/>
                    <Mst style="mstR" mensaje="Instagram"/>
                </div>
                <div className="divR">
                    <Img foto={linkedin} style="imgRedes"/>
                    <Mst style="mstR" mensaje="linkedin"/>
                </div>
            </div>
        </div>
    );
}

export default Redes;