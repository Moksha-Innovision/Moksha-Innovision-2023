import { extendTheme } from "@chakra-ui/react";
import { tabsTheme } from "./Tabs";

const theme = extendTheme({
  components: {
    Tabs: tabsTheme,
  },
});

export default theme;
