import './CalcCentimetro.css'
import { FaRulerVertical } from "react-icons/fa6";

function CalcCentimetro() {

    const calcular = (function () {
        const metro = document.getElementById("metro").value
        const total = metro * 100  
        alert("O valor convertido para centímetros é: " + total + "cm")
    })

    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
                
                <div className="form-group mb-3">
                    <label htmlFor="metro">Valor em Metros para Centímetros</label>
                    <input type="text" className="form-control" id="metro" />
                </div>
                <button type="button" onClick={calcular}className="btn btn-primary w-100"><FaRulerVertical size={20} color='white'/>Calcular</button>
            </form>
 
        </>
    )
}

export default CalcCentimetro;