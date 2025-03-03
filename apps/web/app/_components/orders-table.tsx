import { OrdersTableProps } from '../../types';

export default function OrdersTable({ orders }: OrdersTableProps) {
    return (
        <>
            <h2 className='text-2xl font-bold'>Orders</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded my-6">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-left py-3 px-5 uppercase text-sm">ID</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Products</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Created At</th>
                            <th className="text-left py-3 px-5 uppercase text-sm">Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr className="border-b hover:bg-gray-50" key={order.id}>
                                <td className="py-3 px-5 text-sm">{order.id}</td>
                                <td className="py-3 px-5 text-sm">
                                    <ul className="list-disc pl-4">
                                        {order.products.map((product, index) => (
                                            <li key={index}>
                                                {product.name} — {product.quantity} × ${product.price}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="py-3 px-5 text-sm">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-5 text-sm">
                                    {new Date(order.updatedAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

