const formatearNumero = (numero) => {
    if(numero > 0) {
        const numeroFormateado = new Intl.NumberFormat('es-AR').format(numero);
        return numeroFormateado;
    }
    return numero;
}
export default formatearNumero;