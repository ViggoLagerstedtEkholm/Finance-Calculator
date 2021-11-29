import {Accordion} from "react-bootstrap";

function Collapsible(props) {
    const {title} = props;

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {props.children}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Collapsible;
