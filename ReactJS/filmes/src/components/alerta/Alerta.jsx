import Swal from "sweetalert2"
import "./Alerta.css"


export const Alerta = ({
    title,
    text,
    icon,
    showCancelButton = null,
    confirmButtonColor = "#d33",
    cancelButtonColor = "#3085d6",
    cancelButtonText = null,
    confirmButtonText = null
}) => {
    return (
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        })
    )
}