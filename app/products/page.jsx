"use client"
import { useState } from "react";
import ProductPage from "@/components/product/ProductPage";
import Link from "next/link";
import AddProducts from "@/components/product/AddProducts";
import { useRouter } from "next/navigation";

const Page = () => {
    const [show, setShow] = useState(false);
<<<<<<< HEAD
    const [responseProduct, setResponseProduct] = useState({
        id: "",
        name: "",
        file: null,
        Sku:"",
        currentPrice:"",
        quantity:"",
        category:"",
    });
=======
    const [responseProduct, setResponseProduct] =useState({
        title: "",
        sku: "",
        description: "",
        price: "",
        brand: "",
        quantity: "",
        sold: "",
        category: "",
        color: "",
    });

>>>>>>> 4afe55a (order)
    const router = useRouter();

    const handleAddProductClick = () => {
        setShow(!show);
    };

    return (
        <>
            <div className={`cursor-pointer ${show ? "bg-green-400 hover:bg-green-500/90" : "bg-primary hover:bg-primary/80"} px-4 py-2 bg-primary rounded-md absolute right-5 top-40`}>
                <a className="font-medium text-sm text-white" onClick={handleAddProductClick}>
<<<<<<< HEAD
                    {show ? "Back to table" : "Add Product"}
                </a>
            </div>
            {show ? <AddProducts responseProduct={responseProduct} setResponseProduct={setResponseProduct} /> : <ProductPage responseProduct={responseProduct} />}
=======
                    {show ? "Back to table" : "Add Products"}
                </a>
            </div>
            {show ? <AddProducts responseProduct={responseProduct} setResponseProduct={setResponseProduct} /> : <ProductPage setResponseProduct={setResponseProduct} responseProduct={responseProduct} />}
>>>>>>> 4afe55a (order)
        </>
    );
};

export default Page;
