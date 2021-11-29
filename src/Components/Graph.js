import {BarChart, XAxis, CartesianGrid, ResponsiveContainer, Bar, YAxis} from "recharts";

function Graph(props) {
    const {data} = props;

    return (
        <ResponsiveContainer width='100%' aspect={3}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="time" />
                <YAxis />
                <Bar label={true} dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Graph;
