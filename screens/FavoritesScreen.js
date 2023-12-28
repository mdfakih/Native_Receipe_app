import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FavouritesContext } from '../store/context/favourites-context';
import MealsList from '../components/MealList/MealsList';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);

  // const favourtieMealsCtx = useContext(FavouritesContext);

  const favMeals = MEALS.filter((meal) => favouriteMealsIds.includes(meal.id));

  // const favMeals = MEALS.filter((meal) =>
  //   favourtieMealsCtx.ids.includes(meal.id),
  // );

  return favMeals.length === 0 ? (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favourite meals.</Text>
    </View>
  ) : (
    <MealsList items={favMeals} />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavoritesScreen;
