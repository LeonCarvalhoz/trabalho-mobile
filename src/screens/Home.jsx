import React, { useEffect, useState, useCallback } from "react";
import { Text, SafeAreaView, Button, StatusBar, FlatList, View, TouchableOpacity, StyleSheet, Image } from "react-native";

const Home = ({ navigation }) => {
  const [dataPoke, setDataPoke] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const fetchDataPoke = useCallback(async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${currentPage * 50}`);
      const data = await response.json();
      setDataPoke((prevData) => [...prevData, ...data.results]);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchDataPoke();
  }, [fetchDataPoke]);

  const Pokemon = ({ item }) => {
    const { name, url } = item;
    const pokemonId = url.split("/")[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;



    return (
      <TouchableOpacity style={styles.card}>
        <Text>{name}</Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text>{url}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="End" onPress={() => navigation.navigate('End')} />
      <StatusBar />
      <Text style={styles.header}>POKEMONS</Text>
      <FlatList
        data={dataPoke}
        renderItem={({ item }) => <Pokemon item={item} />}
        keyExtractor={(item) => item.name}
        onEndReachedThreshold={0.1}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "orange",
    paddingVertical: 35,
  },
  container: {
    flex: 1,
    backgroundColor: "#a4ede6",
  },
  card: {
    marginHorizontal: 25,
    marginVertical: 20,
    borderWidth: 10,
    borderColor: "orange",
    padding: 15,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default Home;