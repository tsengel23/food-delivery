import { DeliveryAddress } from "./DeliveryAddress";
import { Order } from "./Order";
import { UserStatus } from "./UserStatus";

export const AfterLogin = () => {
  return (
    <div className=" flex gap-3 items-center">
      <DeliveryAddress />
      <Order />
      <UserStatus />
    </div>
  );
};
