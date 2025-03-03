"use client"
import { useState } from "react";
import { editProduct } from "../../actions";
import { EditProductProps } from "../../types";

export default function EditProduct({ product }: EditProductProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ ...product });
    const editProductWithId = editProduct.bind(null, product.id.toString());
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (formData: FormData) => {
        await editProductWithId(formData); // Call the server action
        setIsOpen(false); // Close the modal after success
    };
    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
            >
                Edit Product
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
                        <form action={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
