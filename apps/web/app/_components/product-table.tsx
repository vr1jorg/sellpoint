import React from 'react';
import DeleteProduct from './delete-product';
import EditProduct from './edit-product';
import { ProductsTableProps } from '../../types';

function ProductTable({ products }: ProductsTableProps) {
    return (
        <>
            <h2 className='text-2xl font-bold'>Products</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded my-6">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-left py-3 px-5 uppercase text-sm">ID</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Name</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Category</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Quantity</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Price</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Created At</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Updated At</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr className="border-b hover:bg-gray-50" key={product.id}>
                                <td className="py-3 px-5 text-sm">{product.id}</td>
                                <td className="py-3 px-5 text-sm">{product.name}</td>
                                <td className="py-3 px-5 text-sm">{product.category}</td>
                                <td className="py-3 px-5 text-sm">{product.quantity}</td>
                                <td className="py-3 px-5 text-sm">{product.price}</td>
                                <td className="py-3 px-5 text-sm">{product.createdAt.toLocaleDateString()}</td>
                                <td className="py-3 px-5 text-sm">{product.updatedAt.toLocaleDateString()}</td>
                                <td className="py-3 px-5 text-sm flex">
                                    <EditProduct product={product} />
                                    <DeleteProduct id={product.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ProductTable;
