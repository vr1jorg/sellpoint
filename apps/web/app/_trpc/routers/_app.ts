import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { mockProducts } from '../../../constants';
import { getProducts } from '../../../actions';
export const appRouter = createTRPCRouter({
  getProducts: baseProcedure
    .query(async (opts) => {
      return {
        products: await getProducts(),
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;