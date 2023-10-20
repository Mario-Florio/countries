import "./Dashboard.css";
import { useState } from "react";
import Search from "./Search/Search";
import FlexBox from "./FlexBox/FlexBox";

function Dashboard(props) {

    const { countries, setSelected, setCountry } = props;

    const [search, setSearch] = useState(null);
    const [region, setRegion] = useState("");

    return(
        <>
            <Search setSearch={setSearch} setRegion={setRegion}/>
            <FlexBox 
                countries={countries} 
                search={search} 
                region={region}
                setSelected={setSelected}
                setCountry={setCountry}
            />
        </>
    );
}

export default Dashboard;