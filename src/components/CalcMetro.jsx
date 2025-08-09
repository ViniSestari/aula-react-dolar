import './CalcMetro.css'
import { SiMetrodeparis } from "react-icons/si";

function CalcMetro() {

    const calcular = (function () {
        const centimetro = document.getElementById("centimetro").value
        const total = centimetro / 100 
        alert("O valor convertido para metros é: " + total + "m")
    })

    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
                
                <div className="form-group mb-3">
                    <label htmlFor="centimetro">Valor em Centímetros para Metros</label>
                    <input type="text" className="form-control" id="centimetro" />
                </div>
                <button type="button" onClick={calcular}className="btn btn-primary w-100"><SiMetrodeparis size={20} color='white'/> Calcular</button>
            </form>
 
        </>
    )
}

export default CalcMetro;