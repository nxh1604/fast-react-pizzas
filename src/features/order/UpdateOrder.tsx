import { ActionFunctionArgs, useFetcher } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = (): JSX.Element => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" style={{ textAlign: "right" }}>
      <Button type="submit">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action = async ({ params }: ActionFunctionArgs) => {
  const data = { priority: true };
  params.orderId && (await updateOrder(params.orderId, data));
  return null;
};
