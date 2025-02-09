import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme';
//crear una interface de pross
interface Props{
    title: string;
}

export const TitleComponent = ({title}:Props) => {
   // hook Ise WindosDimensio
    const { height } = useWindowDimensions();
  return (
    <Text style={{
      ...styles.globalTitle,
      height:height * 0.12
    }}>{title}</Text>
  )
}
