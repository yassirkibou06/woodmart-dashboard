"use client"
import { React, useState, useEffect } from "react";
import { columns } from "@/components/tableDataForProds/columns";
<<<<<<< HEAD
import { DataTable } from "@/components/tableDataForProds/data-table";
import { ScaleLoader } from "react-spinners";
import EditProduct from "./EditProduct";

const ProductList = ({ product }) => {
=======
import { DataTable } from "@/components/tableDataForProds/data-table"
import { ScaleLoader } from "react-spinners";
import EditProduct from "../product/EditProduct"

const ProductList = ({ product, setResponseProduct }) => {
>>>>>>> 4afe55a (order)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prodId, setProdId] = useState(null);
    const [responseProd, setResponseProd] = useState(null);
    const [open, setOpen] = useState(false);
<<<<<<< HEAD
    const fetchUrl = `${apiUrl}/products`;
=======
    const fetchUrl = `${apiUrl}/api/product`;
>>>>>>> 4afe55a (order)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(fetchUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + token,
                    },
                });
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [product, responseProd]);

    const deleteProduct = (e, id) => {
        e.preventDefault();
        fetch(fetchUrl + "/" + id, {
            method: "DELETE",
            headers: {
<<<<<<< HEAD
                //"Authorization": "Bearer " + token,
=======
                "Authorization": "Bearer " + token,
>>>>>>> 4afe55a (order)
            },
        }).then((res) => {
            if (data) {
                setData((prevElement) => {
<<<<<<< HEAD
                    return prevElement.filter((nameI) => nameI.id !== id);
=======
                    return prevElement.filter((nameI) => nameI._id !== id);
>>>>>>> 4afe55a (order)
                });
            }
        });
    };

    const editProduct = (e, id) => {
<<<<<<< HEAD
    e.preventDefault();
    setProdId(id);
    setOpen(true)
  };

=======
        e.preventDefault();
        setProdId(id);
        setOpen(true)
    };
>>>>>>> 4afe55a (order)

    return (
        <>
            {loading && <div className="flex items-center justify-center"><ScaleLoader width={2} height={15} color="#1c61e7" /></div>}
            {!loading && (
                <DataTable columns={columns(deleteProduct, editProduct)} data={data} />
            )
            }
<<<<<<< HEAD
            {open && <EditProduct prodId={prodId} setResponseProd={setResponseProd} setOpen={setOpen} open={open} /> }
=======
            {open && <EditProduct prodId={prodId} setResponseProd={setResponseProd} setOpen={setOpen} open={open} />}
>>>>>>> 4afe55a (order)
        </>
    );
}

export default ProductList;