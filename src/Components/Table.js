import {Table} from "react-bootstrap";

function TableDisplay(props) {
    const {headerValues, bodyValues} = props;

    function GenerateHeader(){
        return headerValues.map((headerVal, index) =>{
           return(
               <th key={index}>{headerVal}</th>
           )
        });
    }

    function GenerateBody(){
        return bodyValues.map(({time, value}, index) =>{
            return(
            <tr>
                <td key={index}>{time}</td>
                <td key={index}>{value}</td>
            </tr>
        )});
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {GenerateHeader()}
            </tr>
            </thead>
            <tbody>
                {GenerateBody()}
            </tbody>
        </Table>
    );
}

export default TableDisplay;
