import {Button, Card, Col, Row} from "react-bootstrap";
import Graph from "./Graph";
import {useEffect, useState} from "react";
import {AnnualPercentageYield} from "./Formulas";
import Collapsible from "./Collapsible";
import TableDisplay from "./Table";

function SimpleInterestCalculator() {
    const [statedAnnualInterestRate, setStatedAnnualInterestRate] = useState(0.06);
    const [numberOfTimesCompounded, setNumberOfTimesCompounded] = useState(10);
    const [APY, setAPY] = useState([]);

    useEffect(() =>{
        const APYPerYear = [];
        const date = new Date();
        for(let i = 1; i < numberOfTimesCompounded; i++){
            APYPerYear.push({time: date.getFullYear() + i, value: AnnualPercentageYield(statedAnnualInterestRate, i)});
        }
        setAPY(APYPerYear);
    }, [statedAnnualInterestRate, numberOfTimesCompounded])

    return (
        <div>
            <h1 className="my-5">Annual Percentage Yield</h1>

            <Row className="my-5">
                <Card>
                    <Card.Body>
                        <Graph data={APY}/>
                    </Card.Body>
                </Card>
            </Row>

            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Button>test1</Button>
                            </Col>

                            <Col>
                                <Button>test2</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>

            <Row className="my-5">
                <Collapsible title="APY">
                    <TableDisplay headerValues={["Date", "APY"]} bodyValues={APY}/>
                </Collapsible>
            </Row>
        </div>
    );
}

export default SimpleInterestCalculator;
