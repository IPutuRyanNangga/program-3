'use client';

import { useState } from 'react';
import Layout from '../komponents/layout';

export default function ShoppingList() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems([...items, item]);
    setItem('');
  };

  return (
    <Layout>
      <h1>Shopping List</h1>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Layout>
  );
}