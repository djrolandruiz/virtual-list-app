import React from 'react';
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
}

interface VirtualListProps {
  items: Company[];
}

const VirtualList: React.FC<VirtualListProps> = ({ items }) => {
  const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
    <ListItem style={style}>
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
