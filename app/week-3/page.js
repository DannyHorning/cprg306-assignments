import Item from './item.js';
import ItemList from './item-list.js';
export default function Page() {
  return (
    <main className='m-4'>
      <h1 className='text-2xl'>Shopping List</h1>
      <p>
      <Item name="milk, 4 L 🥛" quantity={1} category="dairy" />
      <Item name="bread 🍞" quantity={2} category="bakery" />
      <Item name="eggs, dozen 🥚" quantity={2} category="dairy" />
      <Item name="bananas 🍌" quantity={6} category="produce" />
      <Item name="broccoli 🥦" quantity={3} category="produce" />
      <Item name="chicken breasts, 1 kg 🍗" quantity={1} category="meat" />
      <Item name="pasta sauce 🍝" quantity={3} category="canned goods" />
      <Item name="spaghetti, 454 g 🍝" quantity={2} category="dry goods" />
      <Item name="toilet paper, 12 pack 🧻" quantity={1} category="household" />
      <Item name="paper towels, 6 pack" quantity={1} category="household" />
      <Item name="dish soap 🍽️" quantity={1} category="household" />
      <Item name="hand soap 🧼" quantity={4} category="household" />
      </p>
    </main>
  );
}