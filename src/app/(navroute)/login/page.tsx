"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    email: string;
    password: string;
}

const LoginSignupp = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const router = useRouter();

    const gmailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValidation = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const getUsersFromLocalStorage = (): User[] => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    };

    const saveUsersToLocalStorage = (users: User[]): void => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setInputValue((prev) => ({ ...prev, [name]: value }));
        setError((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let error = false;

        if (!inputValue.email) {
            setError((prev) => ({ ...prev, email: "Please enter email*" }));
            error = true;
        } else if (!gmailValidation.test(inputValue.email)) {
            setError((prev) => ({ ...prev, email: "Please enter a valid email*" }));
            error = true;
        }
        if (!inputValue.password) {
            setError((prev) => ({ ...prev, password: "Please enter password*" }));
            error = true;
        } else if (!passwordValidation.test(inputValue.password)) {
            setError((prev) => ({ ...prev, password: "Password must be 8 characters long and include at least one uppercase letter, one number, and one special character*" }));
            error = true;
        }
        if (inputValue.password !== inputValue.confirmPassword && !isLogin) {
            setError((prev) => ({ ...prev, confirmPassword: "Confirm password does not match with password*" }));
            error = true;
        }
        
        if (!error) {
            if (isLogin) {
                // Login logic
                const users = getUsersFromLocalStorage();
                const user = users.find(user => user.email === inputValue.email && user.password === inputValue.password);

                if (user) {
                    setTimeout(() => {
                        router.push('/'); // Redirect upon successful login
                        alert(" Login Sucessfull")
                    }, 1000);
                } else {
                    setError((prev) => ({ ...prev, email: "Invalid email or password*" }));
                }
            } else {
                // Sign-up logic
                const users = getUsersFromLocalStorage();
                const existingUser = users.find(user => user.email === inputValue.email);

                if (existingUser) {
                    setError((prev) => ({ ...prev, email: "Email already exists. Please use a different email." }));
                } else {
                    const newUser: User = { email: inputValue.email, password: inputValue.password };
                    users.push(newUser);
                    saveUsersToLocalStorage(users);
                    setTimeout(() => {
                        setIsLogin(true); // Switch to login after successful sign-up
                        alert("SignUp sucessfull")
                    }, 1000);
                }
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <div className="flex mb-4 border-b border-gray-200">
                    <button
                        className={`flex-1 py-3 text-lg font-semibold rounded-t-lg transition-colors duration-300 ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-3 text-lg font-semibold rounded-t-lg transition-colors duration-300 ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setIsLogin(false)}
                    >
                        SignUp
                    </button>
                </div>
                {isLogin ? (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email 📩"
                                value={inputValue.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                                required
                            />
                            {error.email && <span className="text-red-500 text-sm mt-1">{error.email}</span>}
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password 🔐"
                                value={inputValue.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                                required
                            />
                            {error.password && <span className="text-red-500 text-sm mt-1">{error.password}</span>}
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-300">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                        >
                            Login
                        </button>
                        <p className="text-center text-gray-600">
                            Not a member? <a href="#" className="text-blue-500 hover:text-blue-600 hover:underline" onClick={() => setIsLogin(false)}>SignUp now</a>
                        </p>
                    </form>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={inputValue.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                                required
                            />
                            {error.name && <span className="text-red-500 text-sm mt-1">{error.name}</span>}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email 📩"
                                value={inputValue.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                                required
                            />
                            {error.email && <span className="text-red-500 text-sm mt-1">{error.email}</span>}
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password 🔐"
                                value={inputValue.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                                required
                            />
                            {error.password && <span className="text-red-500 text-sm mt-1">{error.password}</span>}
                        </div>
                        <div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password 🔐"
                                value={inputValue.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                                required
                            />
                            {error.confirmPassword && <span className="text-red-500 text-sm mt-1">{error.confirmPassword}</span>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                        >
                            SignUp
                        </button>
                        <p className="text-center text-gray-600">
                            Already have an account? <a href="#" className="text-blue-500 hover:text-blue-600 hover:underline" onClick={() => setIsLogin(true)}>Login Now</a>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginSignupp;
