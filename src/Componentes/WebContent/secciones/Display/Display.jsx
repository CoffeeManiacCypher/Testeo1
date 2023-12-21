import "./Display.css";

const Display = () => {
    return (
        <div className='header-container'>

            <a href='#s-cristalina'>
                <button className='card-cristalina' >
                    <h1 className='txt1'>Productos</h1>
                    <h1 className='txt2'>Cristalina</h1>
                </button>
            </a>

            <a href='#s-flamenco'>
                <button className='card-flamenco'>
                    <h1 className='txt1'>Productos</h1>
                    <h1 className='txt2'>Flamenco</h1>
                </button>
            </a>


        </div>
    )
}
export default Display