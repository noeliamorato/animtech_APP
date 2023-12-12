import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AreaChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

const GraficoLineas = () => {
  const [data, setData] = useState([
    50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53,
  ]);

  const generateRandomDate = () => {
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
    );
    const formattedDate = `${randomDate.getFullYear()}-${(
      randomDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${randomDate.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  };

  const dates = Array.from({ length: data.length }, () => generateRandomDate());
  console.log(dates);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = Array.from(
        { length: data.length },
        () => Math.floor(Math.random() * 100) - 50
      );
      setData(newData);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [data]);

  const contentInset = { top: 40, bottom: 40 };

  return (
    <>
      <View style={dataStyle.contenido}>
        <Text>Sensor de Temperatura </Text>
        <AreaChart
          style={{ height: 300, padding: 10 }}
          data={data}
          svg={{ stroke: "blue" }}
          contentInset={contentInset}
          curve={shape.curveBasis}
        >
          <Grid />
        </AreaChart>
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={dates}
          formatLabel={(value, index) => value}
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
        <AreaChart
          style={{ height: 200 }}
          data={data}
          svg={{ stroke: "blue" }}
          contentInset={contentInset}
          curve={shape.curveBasis}
        >
          <Grid />
        </AreaChart>
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={dates}
          formatLabel={(value, index) => value}
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
        <AreaChart
          style={{ height: 200 }}
          data={data}
          svg={{ stroke: "blue" }}
          contentInset={contentInset}
          curve={shape.curveBasis}
        >
          <Grid />
        </AreaChart>
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={dates}
          formatLabel={(value, index) => value}
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

        <Text>Sensor de otro </Text>
        <AreaChart
          style={{ height: 200 }}
          data={data}
          svg={{ stroke: "blue" }}
          contentInset={contentInset}
          curve={shape.curveBasis}
        >
          <Grid />
        </AreaChart>
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={dates}
          formatLabel={(value, index) => value}
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

export default GraficoLineas;

export const dataStyle = StyleSheet.create({
  contenido: {
    backgroundColor: "#fff",
    padding: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 15,
  },
});
