import SidebarItem from "./SidebarItem"
import items from "../../data.js"


export default function Sidebar({isSidebarOpen}){
    return (
        <div className="sidebar" style={{maxWidth:isSidebarOpen? "240px":'55px'}}>
          { items.map((item, index) => <SidebarItem key={index} item={item} isSidebarOpen={isSidebarOpen}/>) }
        </div>
    )
}