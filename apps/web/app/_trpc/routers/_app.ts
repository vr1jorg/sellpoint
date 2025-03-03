import { baseProcedure, createTRPCRouter } from '../init';
import { getOrders, getProducts } from '../../../actions';
export const appRouter = createTRPCRouter({
  getProducts: baseProcedure
    .query(async (opts) => {
      return {
        products: await getProducts(),
      };
    }),
  getOrders: baseProcedure
    .query(async (opts) => {
      return {
        orders: await getOrders()
      }
    })
});
// export type definition of API
export type AppRouter = typeof appRouter;