import React, { useState } from 'react';


import { Grommet, Box, DataTable, Heading, Meter, Text, Button } from 'grommet';
import { grommet } from 'grommet/themes';
import { InProgress} from 'grommet-icons';

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NIS',
  minimumFractionDigits: 2,
});
const columns = [
  {
    property: 'key',
    header: 'Key',
    primary: true,
    footer: 'Total',
  },
  {
    property: 'name',
    header: <Text>Name with extra</Text>,
    primary: true,
    footer: 'Total',
  },
  {
    property: 'location',
    header: 'Location',
  },
  {
    property: 'date',
    header: 'Due',
    render: datum =>
      datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end',
  },
  {
    property: 'percent',
    header: 'Percent Complete',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }} alignSelf="center">
        <Meter
          values={[
            { value: datum.percent, color: `accent-${(datum.key % 4) + 1}` },
          ]}
          thickness="small"
          size="xxsmall"
          type="circle"
        />
      </Box>
    ),
  },
  {
    property: 'paid',
    header: 'Paid',
    render: datum => amountFormatter.format(datum.paid / 100),
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true },
  },
];

const DATA = [
  {
    key: 1,
    name: 'Ilana',
    location: 'Bay Area',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    key: 2,
    name: 'Oorestisime',
    location: 'Paris',
    date: '2019-06-10',
    percent: 30,
    paid: 1234,
  },
  {
    key: 3,
    name: 'Chris',
    location: 'Bay Area',
    date: '2019-06-09',
    percent: 40,
    paid: 2345,
  },
  {
    key: 4,
    name: 'Eric',
    location: 'Bay Area',
    date: '2019-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    key: 5,
    name: 'Shimi',
    location: 'Fort Collins',
    date: '2019-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    key: 6,
    name: 'Jet',
    location: 'Bay Area',
    date: '2019-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    key: 7,
    name: 'Mike',
    location: 'Boise',
    date: '2019-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    key: 8,
    name: 'Alex',
    location: 'Hillsborough',
    date: '2019-06-10',
    percent: 10,
    paid: 2345,
  },
  {
    key: 9,
    name: 'Alan',
    location: '',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    key: 10,
    name: 'Bryan',
    location: 'Fort Collins',
    date: '2019-06-10',
    percent: 30,
    paid: 1234,
  },
  {
    key: 11,
    name: 'Jens',
    location: 'Fort Collins',
    date: '2019-06-09',
    percent: 40,
    paid: 2345,
  },
  {
    key: 12,
    name: 'Dana',
    location: 'Fort Collins',
    date: '2019-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    key: 13,
    name: 'Tracy',
    location: 'Bay Area',
    date: '2019-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    key: 14,
    name: 'Greg',
    location: 'Fort Collins',
    date: '2019-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    key: 15,
    name: 'Brittany',
    location: 'Fort Collins',
    date: '2019-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    key: 16,
    name: 'Madhu',
    location: 'Seattle',
    date: '2019-06-10',
    percent: 10,
    paid: 2345,
  },
  {
    key: 17,
    name: 'Ian',
    location: '',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    key: 18,
    name: 'Cheri',
    location: 'Fort Collins',
    date: '2019-06-10',
    percent: 30,
    paid: 1234,
  },
  {
    key: 19,
    name: 'John',
    location: 'Fort Collins',
    date: '2019-06-09',
    percent: 40,
    paid: 2345,
  },
  {
    key: 20,
    name: 'Jens',
    location: 'Fort Collins',
    date: '2019-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    key: 21,
    name: 'Greg',
    location: 'Fort Collins',
    date: '2019-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    key: 22,
    name: 'Karen',
    location: 'Fort Collins',
    date: '2019-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    key: 23,
    name: 'Michael',
    location: 'Boise',
    date: '2019-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    key: 24,
    name: 'Tracy',
    location: 'San Francisco',
    date: '2019-06-10',
    percent: 10,
    paid: 2345,
  },
  {
    key: 25,
    name: 'Alex',
    location: 'Hillsborough',
    date: '2019-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    key: 26,
    name: 'Brittany',
    location: 'Fort Collins',
    date: '2019-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    key: 27,
    name: 'Madhu',
    location: 'Seattle',
    date: '2019-06-10',
    percent: 10,
    paid: 2345,
  },
  {
    key: 28,
    name: 'Ian',
    location: '',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    key: 29,
    name: 'Cheri',
    location: 'Fort Collins',
    date: '2019-06-10',
    percent: 30,
    paid: 1234,
  },
];

const newData = [
  {
    key: 30,
    name: 'Jens',
    location: 'Fort Collins',
    date: '2019-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    key: 31,
    name: 'Greg',
    location: 'Fort Collins',
    date: '2019-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    key: 32,
    name: 'Karen',
    location: 'Fort Collins',
    date: '2019-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    key: 33,
    name: 'Michael',
    location: 'Boise',
    date: '2019-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    key: 34,
    name: 'Tracy',
    location: 'San Francisco',
    date: '2019-06-10',
    percent: 10,
    paid: 2345,
  },
  {
    key: 35,
    name: 'Alex',
    location: 'Hillsborough',
    date: '2019-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    key: 36,
    name: 'Brittany',
    location: 'Fort Collins',
    date: '2019-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    key: 37,
    name: 'Madhu',
    location: 'Seattle',
    date: '2019-06-10',
    percent: 10,
    paid: 2345,
  },
  {
    key: 38,
    name: 'Ian',
    location: '',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    key: 39,
    name: 'Cheri',
    location: 'Fort Collins',
    date: '2019-06-10',
    percent: 30,
    paid: 1234,
  },
];



export const InfiniteScrollDataTable = () => {
  const step = 10;
  //let controlData = undefined;
  const coloredButton = {
    button: {
      border: {
        color: 'red',
      },
      color:  'text-strong' ,
      primary: {
        color: 'red',
      },
      font: { family: 'Arial' },
    },
  };

  const clickedButton = {
    button: {
      border: {
        color: 'brand',
      },
      color:  'text-strong' ,
      primary: {
        color: 'brand',
      },
      font: { family: 'Arial' },
    },
  };


  const [icon, setIcon] = useState(null);
  const [label, setLabel] = useState("Load more");
  const [tableData, setNewData] = useState(DATA);
  const [color, setStyle] = useState('control');
  // const [theme, setTheme] = useState(coloredButton);

  const load = () => {
    console.log(`InfiniteScroll fires onMore`);
    setTimeout(() => {
    setNewData([...tableData, ...newData]);
    }, 3000);
    
  };

  const storeLoad = {
    Load: () => load()};
    
  const getMoreData = label => {
    setLabel("Loading more");
    storeLoad.Load();
  };

  const loadIcon = icon => {
    setIcon(<InProgress/>);
  };

  const clickStyle = color =>{
    setStyle('brand');
  };

  // const changeButton = theme =>{
  //   setTheme(clickedButton);
  // };

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Heading level={3}>
          <Box gap="small">
            <strong>InfiniteScroll embedded in DataTable</strong>
            <Text>
              Scroll down to load more data, open console to see loading info
            </Text>
          </Box>
        </Heading>
        <DataTable
          columns={columns}
          data={tableData}
          step={step}
          //onMore={storeLoad.Load}
        />
        <Box align="center" pad="small">
          <Button color={color} label= {label} icon={icon}  onClick={() => {getMoreData(label); loadIcon(icon); clickStyle(color)}}/>
        </Box>
      </Box>
    </Grommet>
  );
};

export default InfiniteScrollDataTable