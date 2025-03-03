import AddMockProduct from '../../_components/add-mock-product';
import OrdersTable from '../../_components/orders-table';
import ProductTable from '../../_components/product-table';
import { trpc } from '../../_trpc/server';

export default async function AdminPage() {
    const productsRequest = await trpc.getProducts();
    const ordersRequest = await trpc.getOrders();

    const [{ products }, { orders }] = await Promise.all([productsRequest, ordersRequest])

    if (!productsRequest.products || !ordersRequest.orders) return <div>Loading...</div>;
    return <>
        <ProductTable products={products} />
        <OrdersTable orders={orders} />
    </>
}
