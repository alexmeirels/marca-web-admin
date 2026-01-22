import * as React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import logoSidebar from "../../assets/logo-sidebar.png";
import { Container } from "./styles";
import Icon, { type IconName } from "../Icon";

type ILinkItem = {
  to: string;
  label: string;
  icon: IconName;
  match: (pathname: string) => boolean;
};

export interface ISectionItem {
  title: string;
  links: ILinkItem[];
}

const sections: ISectionItem[] = [
  {
    title: "PRINCIPAL",
    links: [
      {
        to: "/dashboard",
        label: "Dashboard",
        icon: "dashboard",
        match: (p) => p.startsWith("/dashboard"),
      },
      {
        to: "/schedules",
        label: "Agenda",
        icon: "calendar",
        match: (p) => p.startsWith("/schedules"),
      },
    ],
  },
  {
    title: "OPERAÇÃO",
    links: [
      {
        to: "/schedules",
        label: "Reservas",
        icon: "lock",
        match: (p) => p.startsWith("/a"),
      },
      {
        to: "/schedules",
        label: "Financeiro",
        icon: "wallet",
        match: (p) => p.startsWith("/a"),
      },
      {
        to: "/schedules",
        label: "Clientes",
        icon: "usersGroup",
        match: (p) => p.startsWith("/a"),
      },
    ],
  },
  {
    title: "GESTÃO",
    links: [
      {
        to: "/schedules",
        label: "Minhas Quadras",
        icon: "balls",
        match: (p) => p.startsWith("/a"),
      },
      {
        to: "/schedules",
        label: "Horários e Preços",
        icon: "clock",
        match: (p) => p.startsWith("/a"),
      },
    ],
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Toolbar
        sx={{
          py: 3,
        }}
      >
        <Box
          component="img"
          src={logoSidebar}
          alt="Logo Marca"
          sx={{
            width: 160,
            height: "auto",
          }}
        />
      </Toolbar>
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0, // importante p/ o overflow funcionar dentro do flex
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FDB022",
            padding: "10px 0px",
            margin: "0px 16px",
            borderRadius: 2,
            textTransform: "none",
            fontSize: 16,
            fontWeight: 500,
            alignItems: "center",
            "& .MuiButton-startIcon": {
              marginLeft: 0,
              marginRight: 6,
              display: "inline-flex",
              alignItems: "center",
            },
            "&:hover": {
              bgcolor: "#FDB022",
              boxShadow: "none",
            },
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
          startIcon={<Icon name="plus" size={20} stroke="#060F20" />}
          onClick={() => {}}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "#060F20",
              lineHeight: 1,
            }}
            fontWeight="bold"
          >
            {"Nova Reserva"}
          </Typography>
        </Button>
        <List sx={{ py: 1 }}>
          {sections.map((section) => {
            return (
              <React.Fragment key={section.title}>
                <ListItemText
                  primary={section.title}
                  sx={{ mx: 3, mt: 2 }}
                  slotProps={{
                    primary: {
                      sx: {
                        color: "#94979C",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: "0.08em",
                      },
                    },
                  }}
                />
                {section.links.map((link) => {
                  const selected =
                    link.match(pathname) ||
                    (pathname === "/" && link.to === "/dashboard");
                  return (
                    <ListItemButton
                      key={link.to}
                      component={RouterLink}
                      to={link.to}
                      selected={selected}
                      sx={{
                        mx: 2,
                        my: 0.5,
                        py: 0.5,
                        borderRadius: 1.5,
                        bgcolor: selected ? "#FDB022" : "transparent",
                        transition: "background-color 0.2s ease",

                        "&.Mui-selected": {
                          bgcolor: "#22262F",
                          "&:hover": {
                            bgcolor: "#22262F",
                          },
                        },

                        "&:hover": {
                          bgcolor: selected
                            ? "rgba(253, 176, 34, 0.9)"
                            : "rgba(253, 176, 34, 0.1)",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Icon
                          name={link.icon}
                          size={20}
                          fill={selected ? "#FDB022" : "#94979C"}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={link.label}
                        slotProps={{
                          primary: {
                            sx: {
                              color: selected ? "#ECECED" : "#CECFD2",
                              fontWeight: selected ? 600 : 400,
                              fontSize: 18,
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </React.Fragment>
            );
          })}
        </List>

        <Box sx={{ mt: "auto" }}>
          <Divider />
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              v0.1.0
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
