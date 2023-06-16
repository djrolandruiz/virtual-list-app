import React, { useState } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

const ListItem = styled('div')({
  padding: '16px',
  borderBottom: '1px solid lightgray',
});

interface Company {
  name: string;
  rank: number;
  country: string;
  description: string;
}

interface VirtualListProps {
  items: Company[];
  onItemClick: (company: Company) => void;
}

const VirtualList: React.FC<VirtualListProps> = ({ items, onItemClick }) => {
  const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
    <ListItem style={style} onClick={() => onItemClick(items[index])}>
      <div>
        <h3>{items[index].name}</h3>
        <p>Rank: {items[index].rank}</p>
        <p>Country: {items[index].country}</p>
      </div>
    </ListItem>
  );

  return (
    <Paper>
      <FixedSizeList height={400} width={300} itemSize={80} itemCount={items.length}>
        {Row}
      </FixedSizeList>
    </Paper>
  );
};

export default VirtualList;
