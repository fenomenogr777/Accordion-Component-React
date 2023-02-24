import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'r234243f',
      title: 'Section 1',
      content: '11111111111111111111111',
    },
    {
      id: 'd2d324d2',
      title: 'Section 2',
      content: '22222222222222222222222',
    },
    {
      id: 'dasdsadas',
      title: 'Section 3',
      content: '333333333333333333333',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
