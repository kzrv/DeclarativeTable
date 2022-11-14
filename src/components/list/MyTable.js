import {useEffect, useState} from "react";
import Table from "../Table";
import '../tableStyle.css';

export default function MyTable({uri,columns}){
    const [items,setItems] = useState([]);
    const [count,setCount] = useState(1);
    const fetchData = async (urlActual) => {
        const response = await fetch(
            urlActual
        );
        const json = await response.json();
        if (response.ok) {
            setItems(json);
        }
    };
    useEffect(()=>{
        fetchData(uri+`?_page=1&_limit=5`);
    },[])
    const up = ()=>{
        setCount((count1)=>{
            count1 = count1+1;
            console.log(count1);
            const urlTo = `?_page=${count1}&_limit=5`;
            fetchData(uri+urlTo);
            return count1;
        });


    }
    const down = ()=>{
        if(count<=1) return;
        setCount(count1=>{
            count1 = count1-1;
            console.log(count1);
            const urlTo = `?_page=${count1}&_limit=5`;
            fetchData(uri+urlTo);
            return count1;
        });
    }

    return(
        <div>
            <Table data={items} columns={columns}/>
                <div className={"buttons"}>
                    <button onClick={down}>{"<"}</button>
                    {count}
                    <button onClick={up}>{">"}</button>
                </div>
        </div>
    )
}