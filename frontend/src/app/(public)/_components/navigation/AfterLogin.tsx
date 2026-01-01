import { DeliveryAddress } from "./DeliveryAddress";
import { DeliveryAddressLocation } from "./DeliveryAddressLocation";
import { Order } from "./Order";
import { UserStatus } from "./UserStatus";

export const AfterLogin = () => {
  return (
    <div className=" flex gap-3 items-center">
      <DeliveryAddressLocation />
      <Order />
      <UserStatus />
    </div>
  );
};
