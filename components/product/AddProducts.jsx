import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";
import AlertShowing from "../AlertShowing";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const AddProducts = ({ responseProduct, setResponseProduct }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
<<<<<<< HEAD
    const [showAlert, setShowAlert] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState({
        name: "",
        file: null,
        currentPrice: "",
        sku: "",
        quantity: "",
        category: "",
    });

    const fetchUrl = `${apiUrl}/addProduct`;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProducts({
                ...products,
                file: file,
            });
        }
    };

=======
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const [showAlert, setShowAlert] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [prod, setProd] = useState({
        title: "",
        sku: "",
        description: "",
        images: [],
        price: "",
        brand: "",
        quantity: "",
        sold: "",
        category: "",
        color: ""
    });
    const [products, setProducts] = useState({
        title: "",
        sku: "",
        description: "",
        images: null,
        price: "",
        brand: "",
        quantity: "",
        sold: "",
        category: "",
        color: ""
    });
>>>>>>> 4afe55a (order)

    const handleChange = (event, property) => {
        setProducts({
            ...products,
            [property]: event.target.value,
        });
    };

<<<<<<< HEAD
    const handleCategorySelect = (selectedCategory) => {
        setProducts({
            ...products,
            category: selectedCategory,
        });
    };



    const addProduct = async (e) => {
        e.preventDefault();

        if (!products.name.trim()) {
            alert("Please enter a name for Product.");
            return;
        }
        if (products.sku === null) {
            alert("Please enter a Sku for Product.");
            return;
        }
        if (products.price === null) {
            alert("Please enter a price");
            return;
        }
        if (products.quantity === null) {
            alert("Please enter a quantity");
            return;
        }
        if (products.file === null) {
            alert("Please select an image for the product.");
            return;
        }

        const formData = new FormData();
        formData.append("file", products.file);
        formData.append("name", products.name);
        formData.append("currentPrice", products.currentPrice);
        formData.append("sku", products.sku);
        formData.append("quantity", products.quantity);
        formData.append("category", products.category);

        try {
            const response = await fetch(`${apiUrl}/products/addProduct`, {
                method: "POST",
                body: formData
            });

            /*if (!response.ok) {
                throw new Error("Something went wrong");
            }*/

=======
    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageObjects = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            imageObjects.push(file);
        }

        setProducts({
            ...products,
            images: imageObjects
        });
    };

    const addProduct = async () => {
        if (!products.title.trim() || !products.sku || !products.price || !products.quantity) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
                body: JSON.stringify(prod),
            });

>>>>>>> 4afe55a (order)
            if (response.status === 200) {
                alert("Product added successfully");
                setShowAlert(true);
                reset();
            } else {
                alert("Error adding product");
            }
<<<<<<< HEAD

            const product = await response.json();
            setResponseProduct(product);
            //reset();
=======
            const product = await response.json();
            setResponseProduct(product);
>>>>>>> 4afe55a (order)
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

<<<<<<< HEAD
    const reset = () => {
        setProducts({
            name: "",
            file: null,
            currentPrice: "",
            sku: "",
            quantity: "",
            category: "",
=======
    const addProductImage = async (e) => {
        e.preventDefault();

        if (products.images.length === 0) {
            alert("Please select an image for the product.");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < products.images.length; i++) {
            formData.append('images', products.images[i]);
        }

        try {
            const response = await fetch(`${apiUrl}/api/upload`, {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": "Bearer " + token,
                },
            });

            if (response.status === 200) {
                const imageUrls = await response.json();
                alert("Product images uploaded successfully");
                console.log("Image URLs:", imageUrls);

                // Update state with image URLs
                setProd({ ...products, images: imageUrls });
            } else {
                alert("Error uploading product images");
            }
            setFormSubmitted(true);
        } catch (error) {
            console.error("Error uploading product images:", error);
        }
    };
    // This useEffect will be triggered whenever 'prod' is updated
    useEffect(() => {
        if (formSubmitted && prod !== null) {
            addProduct();
        }
    }, [formSubmitted, prod]);

    const handleCategorySelect = (selectedCategory) => {
        setProducts({
            ...products,
            category: selectedCategory,
        });
    };

    const reset = () => {
        setProducts({
            title: "",
            sku: "",
            description: "",
            price: "",
            images: [null],
            brand: "",
            quantity: "",
            sold: "",
            category: "",
            color: "",
            ratings: [
                {
                    star: "",
                    comment: ""
                }
            ]
>>>>>>> 4afe55a (order)
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch(`${apiUrl}/Categories`);
=======
                const response = await fetch(`${apiUrl}/api/category`);
>>>>>>> 4afe55a (order)
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchData();
    }, [apiUrl]);
<<<<<<< HEAD
    //console.log(products);
=======
>>>>>>> 4afe55a (order)

    return (
        <div className="for-all px-7 pt-32 pb-7">
            <h2 className="font-medium text-[28px]">Add Products</h2>
            <div className="flex gap-2 items-center">
                <Link className="text-gray-400 font-medium text-[13px] hover:text-primary" href="/">Home</Link>
                <span className="bg-gray-400 mx-1 w-1 h-1 rounded-full"></span>
                <h4 className="text-gray-400 font-medium text-[13px]">Add Product</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-addProduct grid-rows-1 mt-10 px-5 md:px-20 gap-5">
                <div className="bg-white p-8 w-auto h-fit rounded-ROne mb-5">
                    <h4 className="font-medium text-lg">General</h4>
                    <div className="flex flex-col items-center justify-start">
<<<<<<< HEAD
=======
                        {/*title*/}
>>>>>>> 4afe55a (order)
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
<<<<<<< HEAD
                                value={products.name}
                                placeholder="Name"
                                onChange={(event) => handleChange(event, 'name')}
                            />
                        </div>
=======
                                value={products.title}
                                placeholder="Name"
                                onChange={(event) => handleChange(event, 'title')}
                            />
                        </div>
                        {/*sku*/}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Sku</Label>
                            <Input
                                type="text"
                                value={products.sku}
                                placeholder="5520"
                                onChange={(event) => handleChange(event, 'sku')}
                            />
                        </div>
                        {/**Price */}
>>>>>>> 4afe55a (order)
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="currentPrice">Price</Label>
                            <Input
                                type="text"
<<<<<<< HEAD
                                value={products.currentPrice}
                                placeholder="currentPrice"
                                onChange={(event) => handleChange(event, 'currentPrice')}
                            />
                        </div>
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="sku">SKU</Label>
                            <Input
                                type="text"
                                value={products.sku}
                                placeholder="SKU"
                                onChange={(event) => handleChange(event, 'sku')}
                            />
                        </div>
=======
                                value={products.price}
                                placeholder="price"
                                onChange={(event) => handleChange(event, 'price')}
                            />
                        </div>
                        {/**Sold */}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="sku">Sold</Label>
                            <Input
                                type="text"
                                value={products.sold}
                                placeholder="Sold"
                                onChange={(event) => handleChange(event, 'sold')}
                            />
                        </div>
                        {/**Qty */}
>>>>>>> 4afe55a (order)
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                type="text"
                                value={products.quantity}
                                placeholder="Quantity"
                                onChange={(event) => handleChange(event, 'quantity')}
                            />
                        </div>
<<<<<<< HEAD
                    </div>
                    <div className="mt-8 hidden md:grid">
                        <Button onClick={(e) => {
                            addProduct(e);
=======
                        {/**Brand */}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="brand">Brand</Label>
                            <Input
                                type="text"
                                value={products.brand}
                                placeholder="Brand"
                                onChange={(event) => handleChange(event, 'brand')}
                            />
                        </div>
                    </div>
                    {/**button */}
                    <div className="mt-8 hidden md:grid">
                        <Button onClick={(e) => {
                            addProductImage(e);
>>>>>>> 4afe55a (order)
                        }}>Add Product</Button>
                    </div>
                    <div className="absolute left-[45%] top-[10%]">
                        {showAlert && <AlertShowing showAlert={showAlert} />}
                    </div>
                </div>
<<<<<<< HEAD
                <div className="bg-white p-8 w-[370px] h-fit rounded-ROne">
=======
                {/*////////////// */}
                {/*////////////// */}
                <div className="bg-white p-8 w-[370px] h-fit rounded-ROne">
                    {/**image multi */}
>>>>>>> 4afe55a (order)
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="photo">Picture</Label>
                        <Input
                            id="photo"
                            type="file"
                            accept="image/*"
<<<<<<< HEAD
                            onChange={handleImageChange}
                        />
                    </div>
=======
                            multiple
                            onChange={handleImageChange}
                        />
                    </div>
                    {/**category */}
>>>>>>> 4afe55a (order)
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="category">Category</Label>
                        <Select
                            defaultValue={products.category}
                            onValueChange={handleCategorySelect}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((item) => (
                                    <SelectItem
<<<<<<< HEAD
                                        key={item.id}
                                        value={item.name}
                                    >
                                        {item.name}
=======
                                        key={item._id}
                                        value={item.title}
                                    >
                                        {item.title}
>>>>>>> 4afe55a (order)
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
<<<<<<< HEAD
                    <div className="mt-8 grid md:hidden">
                        <Button onClick={(e) => {
                            addProduct(e);
=======
                    {/** hex color*/}
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="color">Color</Label>
                        <Input
                            type="text"
                            value={products.color}
                            placeholder="#FFFFFF"
                            onChange={(event) => handleChange(event, 'color')}
                        />
                    </div>
                    {/**description */}
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            value={products.description}
                            onChange={(event) => handleChange(event, 'description')}
                            placeholder="Description"
                            className="w-full h-32 border-gray-300 border rounded-ROne p-2 focus:outline-primary"
                        />
                    </div>
                    {/**button */}
                    <div className="mt-8 grid md:hidden">
                        <Button onClick={(e) => {
                            addProductImage(e);
>>>>>>> 4afe55a (order)
                        }}>Add Product</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
