import { TransactionList } from "../@types/TransactionList";

const RecentTransactionList: TransactionList[] = [
  {
    Username: "Ahmed Soran",
    Date: new Date(2023, 0, 12).getTime(),
    Amount: 30,
    Type: "recieved",
  },
  {
    Username: "Sleman Halshoy",
    Date: new Date(2023, 0, 13).getTime(),
    Amount: 3_000,
    Type: "send",
  },
  {
    Username: "Hama Pareshan",
    Date: new Date(2023, 0, 3).getTime(),
    Amount: 12,
    Type: "requested",
  },
  {
    Username: "Trump",
    Date: new Date(2022, 1, 8).getTime(),
    Amount: 1_000,
    Type: "recieved",
  },
  {
    Username: "Activison",
    Date: new Date(2022, 3, 12).getTime(),
    Amount: 30,
    Type: "recieved",
  },
  {
    Username: "iCenter",
    Date: new Date(2023, 0, 1).getTime(),
    Amount: 1200,
    Type: "send",
  },
];

export default RecentTransactionList;
