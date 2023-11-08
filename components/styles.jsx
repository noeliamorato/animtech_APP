import styled from "styled-components";
import { View, Text, Image } from "react-native";

export const StyledContainer = styled.View`
    /* flex: 1; */
    padding: 25px;
    background-color: white;
`;

export const InnerContainer =styled.View`
  height:100%;
    width: 100%;
    align-items: center;
`;

export const PageLogo =styled.Image`
    width: 250px;
    height: 200px;
`;

export const PageTitle =styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: black;
    padding: 10px;
`; 

export const SubTitle = styled.Text`
    font-size: 20px;
    text-align: center;
    color: black;
`;
 
export const TextInput = styled.Text`
    font-size: 20px;
    text-align: center;
    color: black;
`;

export const Button = styled.Text`
    background-color: aliceblue;
`;