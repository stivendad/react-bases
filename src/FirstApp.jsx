
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Daniel'
// };
// const holaNombre = (nombre) => {
//     return `Hola ${nombre}`;
// }

const FirstApp = ( {title, subTitle} ) => {
    

    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{newMessage}</h1> */}
            <p> { subTitle } </p>
        </>
    )
}

export default FirstApp