import { trpc } from '../_trpc/server';

export default async function Home() {
    const productsRequest = await trpc.getProducts();
    console.log(productsRequest);
    // console.log(productsRequest.products)
    //    ^? { greeting: string }
    return <div>{productsRequest.products.map(product => (
        <div key={product.id}>{product.name}</div>
    ))}</div>;
}