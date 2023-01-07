export type TransactionList = {
  Username: string;
  Date: number;
  Amount: number;
  Type: "send" | "recieved" | "requested";
};
