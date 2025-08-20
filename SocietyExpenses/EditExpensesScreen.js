import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import societyData from './dummyData.json';

const EditExpensesScreen = () => {
  const [expenses, setExpenses] = useState(societyData.expenses);
  const navigation = useNavigation();

  const handleExpenseChange = (index, field, value) => {
    const updated = expenses.map((exp, i) =>
      i === index
        ? {
            ...exp,
            [field]: field === 'amount' ? value.replace(/[^0-9]/g, '') : value,
          }
        : exp,
    );
    setExpenses(updated);
  };

  const handleAddMore = () => {
    setExpenses([
      ...expenses,
      { id: String(expenses.length + 1), name: '', amount: '' },
    ]);
  };

  const handleSave = () => {
    console.log('Updated Expenses:', expenses);
    Alert.alert(
      'Expenses saved!',
      'The expenses have been successfully saved.',
      [{ text: 'OK', onPress: () => navigation.navigate('Expenses') }],
    );
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>Edit/Add Expenses</Text>
      <View style={styles.topRow}>
        <Text style={styles.topLabel}>Name</Text>
        <Text style={[styles.topLabel, styles.priceLabel]}>Price</Text>
      </View>
      {expenses.map((item, idx) => (
        <View key={item.id} style={styles.expenseRow}>
          <TextInput
            style={styles.input}
            placeholder="Expense Name"
            value={item.name}
            onChangeText={text => handleExpenseChange(idx, 'name', text)}
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, styles.amountInput]}
            placeholder="Amount"
            value={String(item.amount)}
            onChangeText={text => handleExpenseChange(idx, 'amount', text)}
            keyboardType="numeric"
            placeholderTextColor="#888"
          />
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddMore}>
        <Text style={styles.addButtonText}>+ Add More</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Expenses</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f5f7fa' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#2d3a4b',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  topLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#4f8cff',
    textAlign: 'left',
    marginRight: 10,
  },
  priceLabel: {
    textAlign: 'center',
    flex: 1,
  },
  expenseRow: {
    flexDirection: 'row',
    marginBottom: 14,
    alignItems: 'center',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#bfc8d6',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#2d3a4b',
    marginRight: 10,
  },
  amountInput: {
    flex: 1,
    marginRight: 0,
  },
  addButton: {
    backgroundColor: '#4f8cff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 18,
    shadowColor: '#4f8cff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  saveButton: {
    backgroundColor: '#2d3a4b',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#2d3a4b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default EditExpensesScreen;
