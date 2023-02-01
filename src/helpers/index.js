export const generarId = () => {
    const random = Math.random().toString().substring(2)
    const  fecha =  Date.now().toString(36)
    return random + fecha
}