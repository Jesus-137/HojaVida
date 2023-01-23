import Caption from "../../Components/atoms/Caption";
import Mst from "../atoms/Mst";
import Img from "../atoms/Img";
import facebook from "../../assets/Img/Facebook.png"
import intagram from "../../assets/Img/instagram.png"
import linkedin from "../../assets/Img/linkedin.png";
import Link from "../atoms/Link";
import "../../assets/Styles/Redes.css"

function Redes() {
    return (
        <div className="contenedor">
                <center><Caption style="caption" mensaje="Redes sociales"/></center>
            <div className="contenedorRedes">
                <div className="divR">
                    <Img style="imgRedes" foto={facebook}/>
                    <Link style="mstR" mensaje="Facebok" lin="https://www.facebook.com/jesusignacio.velazquezhernandez.90/" style2="linR"/>
                </div>
                <div className="divR">
                    <Img style="imgRedes" foto={intagram}/>
                    <Link style="mstR" mensaje="Instagram" lin="https://www.instagram.com/jesusignaciovelazqez/" style2="linR"/>
                </div>
                <div className="divR">
                    <Img foto={linkedin} style="imgRedes"/>
                    <Link style="mstR" mensaje="linkedin" lin="https://www.linkedin.com/in/jesus-velazquez-hernandez-ab79b6262/" style2="linR"/>
                </div>
            </div>
        </div>
    );
}

export default Redes;