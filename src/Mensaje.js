const Mensaje = (params) => {
    return <h1 style={{ color: params.color, fontSize: params.size }}>{
        params.message}
        </h1>
}

export default Mensaje