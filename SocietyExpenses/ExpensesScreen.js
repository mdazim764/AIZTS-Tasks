import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import societyData from './dummyData.json';

const ExpensesScreen = () => {
  const balance = societyData.currentAccountBalance;
  const expenses = societyData.expenses;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Current Balance: ₹{balance}</Text>
      <Text style={styles.subHeader}>Expenses:</Text>
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.amount}>₹{item.amount}</Text>
          </View>
        )}
      />
      <Text style={styles.header}>FD: ₹{societyData.fd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  subHeader: { fontSize: 16, fontWeight: '600', marginBottom: 5 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: { fontSize: 16 },
  amount: { fontSize: 16, fontWeight: 'bold' },
});

export default ExpensesScreen;
