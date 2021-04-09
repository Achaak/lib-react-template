import React from 'react';
import { Colors } from '../../styles/colors';
import { styled } from '../../styles/css';

const Container = styled("div", {
  display: 'flex',
  flexWrap: "wrap",
  justifyContent: "space-between"
})

const Element = styled("div", {
  margin: 15,
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center'
})

const ColorBlock = styled("div", {
  height: 50,
  width: 50
})

const Name = styled("span", {
  marginTop: 10,
  textAlign: "center",
  fontFamily: "Roboto",
  fontSize: "0.8em"
})

export interface ColorExampleProps {}

export const ColorExample: React.FC<ColorExampleProps> = () => {
  return (
    <Container>
      {Object.keys(Colors).map((item, key) => (
        <Element key={key}>
          <ColorBlock
            css={{
              backgroundColor: Colors[item as keyof typeof Colors]
            }}
          />
          <Name>{item}</Name>
        </Element>
      ))}
    </Container>
  )
}
