import PropTypes from 'prop-types';

const FirstApp = ( {title, subTitle} ) => {
    

    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{newMessage}</h1> */}
            <p> { subTitle } </p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

export default FirstApp