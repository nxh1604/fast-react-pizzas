import { LoaderFunctionArgs, defer } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

export const loader = ({ params }: LoaderFunctionArgs) => {
  return defer({
    order: params.orderId && getOrder(params.orderId),
  });
};
