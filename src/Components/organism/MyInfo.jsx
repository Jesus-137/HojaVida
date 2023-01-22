import Caption from "../atoms/Caption";
import Mst from "../atoms/Mst";
import SubTitle from "../atoms/SubTitle";
import "../../assets/Styles/MyInfo.css"

function MyInfo() {
    return (
        <div className="section">
            <center><Caption mensaje="Experiencia de estudiante"/></center>
            <div className="divp">
            <div className="divInfo">
                <SubTitle sub="Trabajos univercitarios"/>
                <Mst style="mst" mensaje="1er cuatrimestre, creación de un código capaz de resolver cualquier tipo de matriz.
Proyecto integrador universitario 2do cuatrimestre, el cual fue hacer una aplicación de escritorio llamado Fast Tracking.
Proyecto integrador universitario 3er cuatrimestre, el cual fue hacer una página web de la aplicación ya creada."/>
            </div>
            <div className="divInfo">
                <SubTitle sub="Perfil"/>
                <Mst mensaje="Soy un joven que puede lidiar con la presión incluso en un trabajo en equipo, 
                comprendo los límites de mis compañeros gracias a esto puedo saber que es lo que pueden hacer, 
                con esto determino un mínimo de tiempo que un compañero puede realizar una actividad, además de 
                esto soy lo mas puntual que se pueda."/>
            </div>
            <div className="divInfo">
                <SubTitle sub="Estudios superior actual"/>
                <Mst mensaje="Tres cuatrimestres completados calificaciones promedio, actualmente estoy cursando 
                el 4do cuatrimestre de la carrera ingeniería de software en la Universidad Politécnica de Chiapas."/>
            </div>
            </div>
        </div>
    );
}

export default MyInfo;