"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from '../ui/label'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import AlertShowing from "../AlertShowing"

<<<<<<< HEAD

=======
>>>>>>> 4afe55a (order)
const UploadCategory = ({ responseName, setResponseName }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [showAlert, setShowAlert] = useState(false);
<<<<<<< HEAD
    const [categoryName, setCategoryName] = useState({
        id: "",
        name: ""
    });
    const fetchUrl = `${apiUrl}/SaveCategorie`;

    const handleChange = (event) => {
        setCategoryName({ ...categoryName, name: event.target.value });
=======
    const [categoryData, setCategoryData] = useState({
        title: "",
        link: "",
        data: [
            {
                dataTitle: "",
                dataLink: ""
            }
        ]
    });
    const fetchUrl = `${apiUrl}/api/category`;

    const handleChange = (event, index) => {
        if (index !== undefined) {
            // Handle changes in the nested data array
            const newData = [...categoryData.data];
            newData[index] = {
                ...newData[index],
                [event.target.name]: event.target.value
            };
            setCategoryData({ ...categoryData, data: newData });
        } else {
            // Handle changes in the main category
            setCategoryData({
                ...categoryData,
                [event.target.name]: event.target.value
            });
        }
    };

    const addDataField = () => {
        setCategoryData({
            ...categoryData,
            data: [...categoryData.data, { dataTitle: "", dataLink: "" }]
        });
>>>>>>> 4afe55a (order)
    };

    const saveUser = async (e) => {
        e.preventDefault();
<<<<<<< HEAD
        if (!categoryName.name.trim()) {
=======
        if (!categoryData.title.trim()) {
>>>>>>> 4afe55a (order)
            alert('Please enter a category name.');
            return;
        }

<<<<<<< HEAD
        const response = await fetch(fetchUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": "Bearer " + token,
            },
            body: JSON.stringify(categoryName),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const _name = await response.json();
        setResponseName(_name);
        setShowAlert(true)
        reset();
    };

    const reset = (e) => {
        //e.preventDefault();
        setCategoryName({
            name: ""
=======
        try {
            const response = await fetch(fetchUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
                body: JSON.stringify(categoryData),
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const newCategory = await response.json();
            setResponseName(newCategory);
            setShowAlert(true);
            reset();
        } catch (error) {
            console.error("Error creating category:", error.message);
            // Handle the error (e.g., display an error message to the user)
        }
    };

    const reset = () => {
        setCategoryData({
            title: "",
            link: "",
            data: [{ dataTitle: "", dataLink: "" }]
>>>>>>> 4afe55a (order)
        });
    };

    return (
        <div className="bg-white p-8 w-[370px] h-fit rounded-ROne mb-5">
            <h4 className="font-medium text-lg">Add Category</h4>
            <div className="flex flex-col items-center justify-start">
                <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
<<<<<<< HEAD
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        value={categoryName.name}
                        placeholder="Name"
                        onChange={handleChange}
                    />
                </div>
                {/**Button */}
                <div className="mt-8 grid">
                    <Button onClick={(e) => saveUser(e)} >Add Category</Button>
                </div>
            </div>
            {showAlert && <AlertShowing showAlert={showAlert} />}
        </div >
    );
};

export default UploadCategory;
=======
                    <Label htmlFor="title">Category Name</Label>
                    <Input
                        type="text"
                        name="title"
                        value={categoryData.title}
                        placeholder="Category Name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="link">Category Link</Label>
                    <Input
                        type="text"
                        name="link"
                        value={categoryData.link}
                        placeholder="Category Link"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                {/* Input fields for the nested data array */}
                {categoryData.data.map((dataField, index) => (
                    <div key={index} className="mt-8 grid space-y-3 w-full max-w-sm items-center gap-1.5">
                        <div>
                            <Label htmlFor={`dataTitle-${index}`}>Data Title</Label>
                            <Input
                                type="text"
                                name={`dataTitle`}
                                value={dataField.dataTitle}
                                placeholder="Data Title"
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        <div>
                            <Label htmlFor={`dataLink-${index}`}>Data Link</Label>
                            <Input
                                type="text"
                                name={`dataLink`}
                                value={dataField.dataLink}
                                placeholder="Data Link"
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                    </div>
                ))}
                {/* Button to add more data fields */}
                <div className="flex items-center mt-8 gap-5">
                    <div className="">
                        <Button onClick={addDataField}>Add Data Field</Button>
                    </div>
                    {/**Button */}
                    <div className="">
                        <Button onClick={saveUser}>Add Category</Button>
                    </div>
                </div>
            </div>
            {showAlert && <AlertShowing showAlert={showAlert} />}
        </div>
    );
};

export default UploadCategory;
>>>>>>> 4afe55a (order)
