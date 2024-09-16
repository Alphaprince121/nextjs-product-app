"use client";

import { useEffect, useState } from 'react';
import { useCart } from "../../context/cartContext";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
}

interface CartItem extends Product {
    quantity: number;
}

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { addToCart } = useCart();
    const [loading, setLoading] = useState(true);

    // Snackbar state
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <span>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </span>
    );

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.slice(1, 25));
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const truncateText = (text: string, length: number) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    if (loading) {
        return <div className=" justify-center font-bold text-center  text-2xl">Loading products...</div>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Welcome to Our Store</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products && products.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={item.images[1] }
                            alt={item?.title}
                            className="w-full h-48 object-cover mb-4 rounded-md hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{truncateText(item.title, 25)}</h3>
                        <p className="text-gray-600 text-sm mb-2">{truncateText(item.description, 100)}</p>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-green-700 font-bold">Price: ${item.price.toFixed(2)}</p>
                            <button
                                onClick={() => {
                                    addToCart({ ...item, quantity: 1 } as CartItem);
                                    handleClick();
                                }}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Item added to cart"
                action={action}
            />
        </div>
    );
};

export default HomePage;