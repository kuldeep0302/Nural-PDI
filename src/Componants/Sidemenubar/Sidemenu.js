import React from "react";
import "./Sidemenu.css";
import { Menu } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { DashboardOutlined } from "@ant-design/icons";

import {
  PhoneOutlined,
  ToolOutlined,
  BarChartOutlined,
  FileOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { FileTextOutlined } from "@ant-design/icons";

const Sidemenu = () => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };
  const { SubMenu } = Menu;

  return (
    <>
      <div id="#sidebar" className="content ">
        <div className="sidebar-logo">
          <img
            src="https://nural-sales-document-bucket.s3-ap-south-1.amazonaws.com/picture/0.5999497521591091WhatsApp Image 2023-04-04 at 4.59.23 PM.jpeg"
            alt=""
          />

          <div className="sidebar-logo-text ">
            <p> Test</p>
          </div>
        </div>
        <Menu className="menu" id="menu" onClick={handleMenuClick}>
          <Menu
            theme="dark"
            mode="inline"
            className="sidebar-menu"
            style={{ backgroundColor: "#EFF3FE" }}
          >
            <SubMenu
              key="Dashboard"
              title="Dashboard"
              icon={<DashboardOutlined />}
            >
              <Menu.Item key="Dashboard">
                <Link to="/Dashboard">Dashboard</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="Service-Dashboard"
              title="Service-Dashboard"
              icon={<DashboardOutlined />}
            >
              <Menu.Item key="Service-Dashboard">
                <Link to="/Reappoitment">Service-Dashboard</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>

          <Menu
            theme="dark"
            mode="inline"
            className="sidebar-menu"
            style={{ backgroundColor: "#EFF3FE" }}
          >
            <SubMenu
              key="call-center"
              title="Customer Master"
              icon={<PhoneOutlined />}
            >
              <Menu.Item key="/call-center/option2">
                <Link to="/Customerservice">Create Customer</Link>
              </Menu.Item>
              <Menu.Item key="/call-center/option1">
                <Link to="/Searchdealercustomer">Search Customer</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="AMC" title="AMC" icon={<DashboardOutlined />}>
              <Menu.Item key="Dashboard">
                <Link to="/Amcdashboard">AMC</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>

          <Menu
            theme="dark"
            mode="inline"
            className="sidebar-menu"
            style={{ backgroundColor: "#EFF3FE" }}
          >
            <SubMenu
              key="call-center"
              title="Call Center"
              icon={<PhoneOutlined />}
            >
              <Menu.Item key="/call-center/option1">
                <Link to="/Logcomplaint">Log Complaint</Link>
              </Menu.Item>
              <Menu.Item key="/call-center/option2">
                <Link to="/Bufferstockallocation">Buffer stock allocation</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
          <Menu
            theme="dark"
            mode="inline"
            className="sidebar-menu"
            style={{ backgroundColor: "#EFF3FE" }}
          >
            <SubMenu
              key="Service Center"
              title="Service Center"
              icon={<ToolOutlined />}
            >
              <Menu.Item key="Jobsheet">
                <Link to="/Jobsheets">Jobsheet</Link>
              </Menu.Item>
              <Menu.Item key="/call-center/option2">
                <Link to="/Bufferstockallocation">Buffer stock allocation</Link>
              </Menu.Item>
            </SubMenu>{" "}
          </Menu>

          <Menu
            theme="dark"
            mode="inline"
            className="sidebar-menu"
            style={{ backgroundColor: "#EFF3FE" }}
          >
            <SubMenu key="/Report" title="Report" icon={<FileOutlined />}>
              <SubMenu
                key="/Service Reports"
                title="Service Reports"
                icon={<FileTextOutlined />}
              >
                <Menu.Item key="/service-reports/open-call-detail">
                  <Link to="/Opencalldetail"> Open Call Detail </Link>
                </Menu.Item>
                <Menu.Item key="/service-reports/call-logged-count">
                  <Link to="/Callloggedcount"> Call Logged Count </Link>
                </Menu.Item>
                <Menu.Item key="/service-reports/pending-call-summary">
                  <Link to="/Pendingcallsummary">Pending Call Summary</Link>
                </Menu.Item>
                <Menu.Item key="/service-reports/jobsheet-master-data">
                  <Link to="/JobSheetmasterdata">Jobsheet Master Data</Link>
                </Menu.Item>
                <Menu.Item key="/service-reports/closed-call-detail">
                  Closed Call Detail
                </Menu.Item>
                <Menu.Item key="/service-reports/day-wise-closure-summary">
                  Day Wise Closure Summary Report
                </Menu.Item>
                <Menu.Item key="/service-reports/call-updation-from-mobile">
                  Call Updation From Mobile-App Report
                </Menu.Item>
                <Menu.Item key="/service-reports/job-transfer">
                  Job Transfer Report
                </Menu.Item>
                <Menu.Item key="/service-reports/deploy-base-change-log">
                  Deploy Base Change Log
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="/Inventory Reports"
                title="Inventory Reports"
                icon={<BarChartOutlined />}
              >
                <Menu.Item key="/inventory-reports/service-center-part-consumption">
                  Service Center Part Consumption
                </Menu.Item>
                <Menu.Item key="/inventory-reports/engineer-part-consumption">
                  <Link to="/Engineerpartconsumption">
                    Engineer Part Consumption
                  </Link>
                </Menu.Item>
                <Menu.Item key="/inventory-reports/deployed-base">
                  Deployed Base Report
                </Menu.Item>
                <Menu.Item key="/inventory-reports/repair-stock">
                  Repair Stock Report
                </Menu.Item>
                <Menu.Item key="/inventory-reports/stock-detail">
                  Stock Detail Report
                </Menu.Item>
                <Menu.Item key="/inventory-reports/stock-summary">
                  Stock Summary Report
                </Menu.Item>
                <Menu.Item key="/inventory-reports/damaged-missing-part">
                  Damaged/Missing Part Report
                </Menu.Item>
                <Menu.Item key="/inventory-reports/avg-consumption-forecast">
                  Avg Consumption And Forecast
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="/Tat Report">Tat Report</Menu.Item>
            </SubMenu>
          </Menu>
          <Menu
            theme="dark"
            mode="inline"
            className="sidebar-menu"
            style={{ backgroundColor: "#EFF3FE" }}
          >
            <SubMenu key="/Help" title="Help" icon={<QuestionCircleOutlined />}>
              <Menu.Item key="/help/change-password">Change Password</Menu.Item>
              <Menu.Item key="/help/jobsheet-search">Jobsheet Search</Menu.Item>
              <Menu.Item key="/help/serial-number-tracker">
                Serial Number Tracker
              </Menu.Item>
              <Menu.Item key="/help/view-upload-data-status">
                View Upload Data Status
              </Menu.Item>
            </SubMenu>{" "}
          </Menu>
        </Menu>
        <div className="sidemenu-logo">
          <img
            className="image-sidemenu-logo"
            src="Photos/sidemenulogo.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
