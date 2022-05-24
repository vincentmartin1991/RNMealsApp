import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	function headerButtonPressHandler() {
		console.log("Pressed!");
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return <IconButton icon="star" onPress={headerButtonPressHandler} />;
			},
		});
	}, [navigation, headerButtonPressHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
}

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 24,
	},
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "90%",
	},
});
