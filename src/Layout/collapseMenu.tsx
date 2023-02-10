import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "@mui/joy";

export default function CollapseMenu(props: any) {
  const { menuData } = props;
  const route = useRouter();
  const { asPath } = route;
  const [expanded, setExpanded] = React.useState<string | false>("");
  const [activeClass, setActiveClass] = useState<string>()
  if (menuData.child) {
    const menuData1 = () => {
      menuData.child.map((subMenu: any) => {
        if (`${asPath}/` === `${subMenu.url}`) {
          setExpanded(menuData.id);
          setActiveClass('active')
        }
      });
    };

    const handleChange =
      (getEvent: any) => (event: any, newExpanded: boolean) => {
        setExpanded(newExpanded ? getEvent : false);
      };

    /// set active class
    // useEffect(() => {
    //   menuData1();
    // }, [menuData]);
    return (
      <>
        <Accordion expanded={expanded === menuData.id} onChange={handleChange(menuData.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            className="MenuTitle"

          >
            <Typography className="text-blue-500" >{menuData.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="pl-6 m-0 list-none ">
              {menuData.child?.map((subMenu: any) => {
                return (
                  <li key={Math.random()}>
                    <Link className={`${asPath}/` === subMenu.url ? 'text-blue-500 ' : 'text-slate-500'} href={subMenu.url}>{subMenu.name}</Link>
                  </li>
                );
              })}
            </ul>
          </AccordionDetails>
        </Accordion>
      </>
    );
  } else {
    return (
      <>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" className="MenuTitle">
          <Link className={`${asPath}/` === menuData.url ? 'text-blue-500 ' : 'text-slate-500'} href={menuData.url}>{menuData.name}</Link>
        </AccordionSummary>
      </>
    );
  }
}
