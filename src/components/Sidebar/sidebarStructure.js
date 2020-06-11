import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoney from "@material-ui/icons/AttachMoney";

export const sidebarStructure = [
    {
        id: 0,
        label: "General",
        icon: <DashboardIcon/>,
        link: "/app",
        children: [
            {label: "Dashboard", link: "/app/dashboard"},
            {label: "Orders", link: "/app/orders"},
        ],
    },
    {
        id: 1,
        label: "Orders",
        link: "/app/orders",
        icon: <AttachMoney/>,
    },
];
