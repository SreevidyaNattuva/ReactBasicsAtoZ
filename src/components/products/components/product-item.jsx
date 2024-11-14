import './style.css';

const ButtonFunction= () =>{
    return(
        <button>Click</button>
    );
}

const ProductItem = ({index,singleItem})=>{
    return(
        <div class= {index}>
            <h4>{singleItem}</h4>
            <ButtonFunction/>
        </div>
    );

};
export default ProductItem;