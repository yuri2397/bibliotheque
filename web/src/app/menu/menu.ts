import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  {
    id: "documents",
    title: "Documents",
    translate: "MENU.DOCUMENT",
    type: "item",
    icon: "book",
    url: "admin/documents",
    params: {
      'width[]': ["authors"],
      'per_page': 15,
      'page': 1
    },
  },
  {
    id: "area",
    title: "Rayon",
    translate: "MENU.AREA",
    type: "item",
    icon: "book",
    url: "admin/areas",
  },
  {
    id: "order",
    title: "Commande",
    translate: "MENU.ORDER",
    type: "item",
    icon: "clipboard",
    url: "admin/orders",
  },
  {
    id: "users",
    title: "Utilisateurs",
    translate: "MENU.USER",
    type: "item",
    icon: "user",
    url: "admin/users",
  },
];
