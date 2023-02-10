import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import TopBar from "./topBar";
import { mainMenu } from "./sidebarMenu";
import { useRouter } from "next/router";


import CollapseMenu from "./collapseMenu";

const drawerWidth = 240;

type LayoutProps = {
  children: any;
  commonHeader: any;
};
export default function Layout({ children, commonHeader }: LayoutProps) {
  const route = useRouter();
  const [subMenuOpen, setSubMenu] = React.useState(false);

  function subMenuHandler(e: any) {
    setSubMenu(!subMenuOpen);
  }
  React.useEffect(() => {
    // getMenu();
  }, []);

  return (
   <>
     <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        className="shadow-lg"
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <>
            {mainMenu.map((item: any) => (
                <CollapseMenu key={item.id} menuData={item} />
            ))}
          </>
        </Box>
      </Drawer>
      <Box className="w-full px-7">
        <div className="mt-20 w-full py-4 items-center">{commonHeader}</div>
        <Box
          className="wrapper bg-white w-full shadow-rose-900"
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          {children}
        </Box>
      </Box>
    </Box>
   </>
  );
}
