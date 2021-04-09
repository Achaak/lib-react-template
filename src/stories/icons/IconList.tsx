import React from 'react';
import { Icon, IconProps, IconsList, IconsNameType } from '../../icon';
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
const Name = styled("span", {
  marginTop: 10,
  textAlign: "center",
  fontFamily: "Roboto",
  fontSize: "0.8em"
})

export const IconExample: React.FC<IconProps> = (props) => {
  return (
    <Container>
      {Object.keys(IconsList).map((item, key) => (
        <Element key={key}>
          <Icon
            {...props}
            icon={item as IconsNameType}
          />
          <Name>{item}</Name>
        </Element>
      ))}
    </Container>
  )
}
