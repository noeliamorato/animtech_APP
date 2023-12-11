import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { BarChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import { dataStyle } from "./graficoLineas";
const Grificobarras = () => {
  const fill = "rgb(134, 65, 244)";
  const [data, setData] = useState([
    50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
  ]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = Array.from(
        { length: data.length },
        () => Math.floor(Math.random() * 100) - 50
      );
      setData(newData);
      console.log(data);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [data]);
  const contentInset = { top: 40, bottom: 40 };

  return (
   <>
    <View style={dataStyle.contenido}>
        <Text>Sensor de Temperatura </Text>
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={contentInset}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
      <YAxis
        style={{ position: "absolute", top: 0, bottom: 0, left: 10 }}
        data={data}
        contentInset={contentInset}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
    <View style={dataStyle.contenido}>
        <Text>Sensor de ridmo cardico </Text>
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={contentInset}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
      <YAxis
        style={{ position: "absolute", top: 0, bottom: 0, left: 10 }}
        data={data}
        contentInset={contentInset}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
    <View style={dataStyle.contenido}>
        <Text>Sensor de pulso </Text>
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={contentInset}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
      <YAxis
        style={{ position: "absolute", top: 0, bottom: 0, left: 10 }}
        data={data}
        contentInset={contentInset}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
    <View style={dataStyle.contenido}>
        <Text>Otros </Text>
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={contentInset}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
      <YAxis
        style={{ position: "absolute", top: 0, bottom: 0, left: 10 }}
        data={data}
        contentInset={contentInset}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
   
   </>
  );
};

export default Grificobarras;
