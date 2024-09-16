"use client";

import { useState } from 'react';
import { useCart } from '@/app/context/cartContext';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
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

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Your Cart</h1>
            </div>
            {cart.length === 0 ? (
                <p className="text-center text-gray-700 text-lg">Your cart is empty.</p>
            ) : (
                <ul className="space-y-6">
                    {cart.map((item) => (
                        <li key={item.id} className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={item.images[1]}
                                alt={item.title}
                                className="w-24 h-24 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-gray-900 font-bold">Price: ${item.price.toFixed(2)}</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
                                        disabled={item.quantity <= 1}
                                    >
                                        <span className="text-xl font-bold">-</span>
                                    </button>
                                    <span className="text-xl font-bold px-4 py-2 bg-white border border-gray-300 rounded-md">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400"
                                    >
                                        <span className="text-xl font-bold">+</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 flex items-center space-x-2">
                                <button
                                    onClick={() => {
                                        removeFromCart(item.id);
                                        handleClick();
                                    }}
                                    className="text-white font-bold bg-red-500 py-2 px-4 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Item removed from cart"
                action={action}
            />
        </div>
    );
};

export default CartPage;