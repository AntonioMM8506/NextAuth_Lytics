import initializeContentstackSdk from "../sdk/utils";
import { GetServerSideProps } from "next";
import Content from "../sdk/content";


function DashboardPage(){

    return(
        <div>
            <div>Dashboard Page</div>
            <Content entry={"azure"}/>
            <Content entry={"google"}/>
        </div>

    )
}

export default DashboardPage;