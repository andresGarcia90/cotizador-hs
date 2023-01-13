const FormatearNumero = (numero, descuento) => {
    if(numero > 0) {
        let numeroDescuento = descuento ? (numero * 0.5) : numero;
        numeroDescuento = Math.round(numeroDescuento * 100) / 100
        const numeroFormateado = new Intl.NumberFormat('es-AR').format(numeroDescuento);
        return numeroFormateado;
    }
    return numero;
}
export default FormatearNumero;