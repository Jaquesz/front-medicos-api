import Content from "../Components/Content";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Home(){
    return(
        <div>
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    )
}