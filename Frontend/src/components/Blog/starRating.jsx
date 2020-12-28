import React,{useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function StarRating() {
  const [value, setValue] = useState(5);
  return (
    <>
      <Box component="fieldset" borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={( newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </>
  );
}
