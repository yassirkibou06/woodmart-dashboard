"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from '../ui/label'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import AlertShowing from "../AlertShowing"


const EditCategory = ({ nameId, setResponseName, setOpen, open }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [name, setName] = useState({
        id: "",
<<<<<<< HEAD
        name: ""
=======
        title: ""
>>>>>>> 4afe55a (order)
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch(apiUrl + "/" + nameId, {
=======
                const response = await fetch(apiUrl + "/api/category/" + nameId, {
>>>>>>> 4afe55a (order)
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + token,
                    },
                });
                const _name = await response.json();
                setName(_name);

            } catch (error) {
                console.log(error);
            }
        };
        if (nameId) {
            fetchData();
        }
    }, [nameId]);


    const handleChange = (event) => {
<<<<<<< HEAD
        setName({ ...name, name: event.target.value });
=======
        setName({ ...name, title: event.target.value });
>>>>>>> 4afe55a (order)
    };

    const reset = (e) => {
        e.preventDefault();
        setOpen(false)
    };

    const updateName = async (e) => {
        e.preventDefault();
<<<<<<< HEAD
        const response = await fetch(apiUrl + "/UpdateCategorie/" + nameId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": "Bearer " + token,
=======
        const response = await fetch(apiUrl + "/api/category/" + nameId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
>>>>>>> 4afe55a (order)
            },
            body: JSON.stringify(name),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const _name = await response.json();
        setResponseName(_name);
        setOpen(false)
        reset(e);
    };
<<<<<<< HEAD

=======
    console.log(nameId)
>>>>>>> 4afe55a (order)
    return (
        <>
            <div className={`${open ? "absolute bg-background/80 backdrop-blur-sm data-[state=open]:animate-in z-995 left-0 top-0 w-full h-full" : "hidden"}`} ></div>
            <div className="absolute left-[38%] top-[19%] z-999 border bg-background shadow-lg duration-200 p-6 w-[370px] h-fit rounded-ROne mb-5" >
                <h4 className="font-medium text-lg">Update Category</h4>
                <div className="flex flex-col items-center justify-start">
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
<<<<<<< HEAD
                            value={name.name}
=======
                            value={name.title}
>>>>>>> 4afe55a (order)
                            placeholder="Name"
                            onChange={handleChange}
                        />
                    </div>
                    {/**Button */}
                    <div className="h-14 my-4 space-x-5 pt-4">
                        <button
                            onClick={updateName}
                            className="rounded text-white font-medium bg-green-500 hover:bg-green-400 py-2 px-6">
                            Update
                        </button>
                        <button
                            onClick={reset}
                            className="rounded ml-5 text-white font-medium bg-gray-700 hover:bg-red-500 py-2 px-6">
                            Close
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default EditCategory;
