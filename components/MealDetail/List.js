import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
	return data.map((dataPoint) => (
		<View style={styles.listItem} key={dataPoint}>
			<Text>{dataPoint}</Text>
		</View>
	));
}

export default List;

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#ead0d0",
	},
});
