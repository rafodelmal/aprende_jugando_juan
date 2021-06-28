
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";

import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const Routes = [
  {
    path: "/dashboard",
    name: "Perfil",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Ahorcado",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "content_paste",
    component: UserProfile,
    layout: "/admin"
  },
  
  {
    path: "/icons",
    name: "Triqui",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  
  {
    path: "/notifications",
    name: "Stop",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  
  {
    path: "/upgrade-to-pro",
    name: "Tabla de posiciones",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default Routes;
