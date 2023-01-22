import Caption from "../atoms/Caption";
import Img from "../atoms/Img";
import foto from "../../../src/assets/Img/MyCara.jpg";
import SubTitle from "../atoms/SubTitle";
import "../../assets/Styles/Header.css"

function Headers() {
    return (
        <header>
            <Img style="MyFoto" foto={foto} info="My foto"/>
            <div>
                <Caption mensaje="Jesus Ignacio Velazquez Hernadez"/>
                <SubTitle sub="Estudiante de Ingeniería en Desarrollo de Software"/>
            </div>
        </header>
    );
}

export default Headers;