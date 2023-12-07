import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { data } from "./data";

export default function Diagram() {
    return (
        <div className="flex w-full lg:w-1/2">
            <LineChart width={600} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                    labelClassName="font-bold"
                    wrapperClassName="bg-black rounded-lg"
                    contentStyle={{ backgroundColor: "#171717" }}
                />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="Ni"
                    name="Никель"
                    stroke="#8884d8"
                />
                <Line
                    type="monotone"
                    dataKey="Cu"
                    name="Медь"
                    stroke="#82ca9d"
                />
                <Line type="monotone" dataKey="Zn" name="Цинк" stroke="red" />
            </LineChart>
        </div>
    );
}
