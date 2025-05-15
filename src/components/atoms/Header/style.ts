import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 50px;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`

export const Logo = styled.Image.attrs({ source: require("../../../assets/Logo.png") })`
    
`

export const PerfilImage = styled.Image.attrs({ source: require("../../../assets/Ellipse.png") })`
`
