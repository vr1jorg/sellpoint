"use client";
import { useState } from "react";
import { DeleteProductProps } from "../../types";

export default function DeleteProduct({ id }: DeleteProductProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = async () => {
        try {
            // e.g., call an API or server action:
            // await deleteProductAction(id);
            console.log("Product deleted:", id);
            setIsOpen(false);
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    return (
        <div>
            <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => setIsOpen(true)}
            >
                Delete
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                        <p>Are you sure you want to delete this product?</p>
                        <div className="flex justify-end mt-4 space-x-2">
                            <button
                                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={handleDelete}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
