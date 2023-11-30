import { useState } from "react";
import "./Sidebar.css";
// import { MdOutlineProductionQuantityLimits } from "react-icons"
export default function SidebarItem({ item, isSidebarOpen }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {isSidebarOpen ? (
        // Render the full SidebarItem if isSidebarOpen is true
        <>
          {item?.childrens ? (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title">
                <span style={{marginRight:'15px'}}>
                  {item.icon && (
                    <span className={item.icon} style={{ marginRight: "10px" }}></span>
                  )}
                  {item.title}
                </span>
                <span
                  className="bi-chevron-down toggle-btn"
                  onClick={() => setOpen(!open)}
                ></span>
              </div>
              <div className="sidebar-content ">
                {item.childrens.map((child, index) => (
                  <SidebarItem key={index} item={child} isSidebarOpen={isSidebarOpen} />
                ))}
              </div>
            </div>
          ) : (
            <div className="sidebar-item plain">
              {item.icon && (
                <span className={item.icon} style={{ marginRight: "15px" }}></span>
              )}
              {item.title}
            </div>
          )}
        </>
      ) : (
        // Render only the icon if isSidebarOpen is false
        <div className="sidebar-item plain">
          {item.icon && (
            <span className={item.icon} style={{ marginRight: "25px",fontSize:'26px' }}></span>
          )}
          {/* {item.title} */}
        </div>
      )}
    </>
  );
}
