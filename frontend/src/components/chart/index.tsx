import React from "react";
import { View, Text } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
function Chart() {
    return (
        <View>
            <LineChart
                data={{
                    labels: ["Day", "Week", "Months", "Year", "All"],
                    datasets: [
                        {
                            data: [0, 1, 0, 2, 3, 2],
                        },
                    ],
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: "#347AF0",
                    backgroundGradientFrom: "#347AF0",
                    backgroundGradientTo: "#347AF0",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "3",
                        strokeWidth: "1",
                        stroke: "#347AF0",
                    },
                }}
                bezier
                style={{
                    // marginVertical: 8,
                    // borderRadius: 16,
                    // marginTop: 20,
                }}
            />
        </View>
    )
}
export default Chart;