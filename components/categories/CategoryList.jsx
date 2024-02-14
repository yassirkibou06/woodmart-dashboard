"use client"
import { React, useState, useEffect } from "react";
import { columns } from "@/components/tableData/columns";
import { DataTable } from "@/components/tableData/data-table";
import { ScaleLoader } from "react-spinners";
import EditCategory from "./EditCategory";

const CategoryList = ({ name }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nameId, setNameId] = useState(null);
    const [responseName, setResponseName] = useState(null);
    const [open, setOpen] = useState(false);
<<<<<<< HEAD
    const fetchUrl = `${apiUrl}/Categories`;
=======
    const fetchUrl = `${apiUrl}/api/category`;
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
    }, [name, responseName]);

    const deleteName = (e, id) => {
        e.preventDefault();
<<<<<<< HEAD
        fetch(apiUrl + "/DeleteCategorie" + "/" + id, {
            method: "DELETE",
            headers: {
                //"Authorization": "Bearer " + token,
=======
        fetch(apiUrl + "/api/category" + "/" + id, {
            method: "DELETE",
            headers: {
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
<<<<<<< HEAD
=======
    //console.log(data)
>>>>>>> 4afe55a (order)

    const editName = (e, id) => {
    e.preventDefault();
    setNameId(id);
    setOpen(true)
  };


    return (
        <>
            {loading && <div className="flex items-center justify-center"><ScaleLoader width={2} height={15} color="#1c61e7" /></div>}
            {!loading && (
                <DataTable columns={columns(deleteName, editName)} data={data} />
            )
            }
            {open && <EditCategory nameId={nameId} setResponseName={setResponseName} setOpen={setOpen} open={open} /> }
        </>
    );
}

export default CategoryList;