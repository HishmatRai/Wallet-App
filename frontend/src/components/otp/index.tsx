import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./styles";
const CELL_COUNT = 4;

const Otp = (props: any) => {
  const [value, setValue] = useState<string>("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [mydata, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const onSetValue = (value: string) => {
    setValue(value);
    props.OtpCode(value);
  };

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        onFocus={props.inputFocus}
        onBlur={props.inputNotFocused}
        ref={ref}
        {...mydata}
        value={value}
        onChangeText={(value) => onSetValue(value)}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Otp;
