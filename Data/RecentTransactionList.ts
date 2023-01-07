import { TransactionList } from "../@types/TransactionList";

const RecentTransactionList: TransactionList[] = [
  {
    Username: "Ahmed Soran",
    Date: new Date(2022, 3, 12).getTime(),
    Amount: 30,
    Type: "recieved",
  },
  {
    Username: "Sleman Halshoy",
    Date: new Date(2022, 3, 13).getTime(),
    Amount: 30000,
    Type: "send",
  },
  {
    Username: "Hama Pareshan",
    Date: new Date(2020, 1, 3).getTime(),
    Amount: 12,
    Type: "requested",
  },
  {
    Username: "iCenter",
    Date: new Date(2023, 1, 1).getTime(),
    Amount: 1200,
    Type: "send",
  },
];

export default RecentTransactionList;
