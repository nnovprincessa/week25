import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Factors"],
  ["Образ жизни", 50],
  ["Экологическая ситуация", 20],
  ["Наследственность", 23],
  ["Уровень медицинского обслуживания", 7]
];

export const options = {
  title: "Факторы, влияющие на здоровье человека (по данным ВОЗ)",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
