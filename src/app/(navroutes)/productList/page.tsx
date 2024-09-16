"use client";
import { useEffect, useState } from "react";

// Define a type for the products
interface Product {
    id: number;
    title: string;
    image: string;
    price: string;
}

const Page = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(
                "https://fakestoreapi.com/products/category/jewelery"
            );
            let data: Product[] = await response.json();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div className=" bg-green-100 flex items-center justify-center my-17 gap-28">
            
            {products.map((item) => (
                <div className=" flex  w-44 items-center bg-green-200 ">
                    <div key={item.id}>
                        <img src={item.image} className=" w-48 h-52  " />
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;
