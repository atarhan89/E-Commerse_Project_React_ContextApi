
import Loading from "../components/Loading";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from './../context/productContext';


const MainPage = () => {

const {products}=useContext(ProductContext)


    return (
        <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gaap-md-4">
            {!products&&  <Loading/>}
   {products?.map((product)=>(
    <Card key={product.id} product={product}/>
   ))}
   </div>  
  )
  
};

export default MainPage