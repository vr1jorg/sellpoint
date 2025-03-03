import { trpc } from '../_trpc/server';

export default async function Home() {
    const greeting = await trpc.hello();
    //    ^? { greeting: string }
    return <div>{greeting.greeting}</div>;
}