import { useState } from 'react';

function Accordion({ items }) {
  const [isExpanded, setIsExpanded] = useState(-1);

  const handleClick = value => {
    setIsExpanded(value);
    if (isExpanded === value) {
      setIsExpanded(-1);
    }
  };

  const renderedItems = items.map((item, index) => {
    return (
      <div key={item.id} onClick={() => handleClick(index)}>
        <div>{item.title}</div>
        {isExpanded === index && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
