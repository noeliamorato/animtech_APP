import { View, Text } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ModalReportes = () => {
    const [storedData, setStoredData] = useState('');

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@myData:key");
      if (value !== null) {
        setStoredData(value);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    <View>
      <Text>{storedData}</Text>
    </View>
  );
};

export default ModalReportes;
