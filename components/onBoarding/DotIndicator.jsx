// DotIndicator.jsx
import React from "react";
import { View, StyleSheet } from "react-native";

const DotIndicator = ({ activeIndex, totalDots }) => {
  const dots = [];

  for (let i = 0; i < totalDots; i++) {
    dots.push(
      <View
        key={i}
        style={[
          styles.dot,
          i === activeIndex ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    );
  }

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#6CCB2F",
  },
  inactiveDot: {
    backgroundColor: "#d3d3d3",
  },
});

export default DotIndicator;
