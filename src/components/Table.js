import './tableStyle.css';
export default function Table({data,columns}){

    return(
        <table border="1" >

            {/*{filters && filters.map((item) => <button onClick={item.func}>Filtr</button>)}*/}

            {data.map(row => (
                <tr>
                    {columns.map((column, index) => (
                        <td>
                            {(column?.component && column?.component(row)) ?? row[column.attribute]}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    )
}