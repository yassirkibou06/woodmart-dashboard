"use client"
import { React, useState, useEffect } from "react";
import { columns } from "@/components/tableDataForOrder/columns";
import { DataTable } from "@/components/tableDataForOrder/data-table";
import { ScaleLoader } from "react-spinners";

const OrderList = ({ product }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prodId, setProdId] = useState(null);
    const [responseProd, setResponseProd] = useState(null);
    const [open, setOpen] = useState(false);
    const fetchUrl = `${apiUrl}/products`;
const OrderList = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const fetchUrl = `${apiUrl}/api/user/getallorders`;

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
                const _data = await response.json();
                setData(_data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {loading && <div className="flex items-center justify-center"><ScaleLoader width={2} height={15} color="#1c61e7" /></div>}
            {!loading && (
                <DataTable columns={columns} data={data} />
            )}
        </>
    );
}

export default OrderList;