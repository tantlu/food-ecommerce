export type User = {
  id: string;
  phoneNumber: string;
  avatar: string;
  username: string;
  addresses: UserAddress[];
};
export type UserAddress = {
  receiverAddress: string;
  receiverName: string;
  receiverPhone: string;
};
