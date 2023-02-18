import { Store } from "pullstate";

interface StoreType {
  isAdmin: boolean;
  key: string;
}

const Admin = new Store<StoreType>({
  isAdmin: false,
  key: "Moskha_Innovision",
});

export default Admin;
