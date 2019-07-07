import React from 'react';
import { helpStyle } from '../../styles';

const style = {
  borderLeft: '1px solid hotpink',
  paddingLeft: '.5rem'
}

function LabelAndValue({ label, value }) {
  return (
    <span>
      <span style={helpStyle}>
        {label}
      </span>
      {' '}
      <span>
        {value}
      </span>
    </span>
  );
}

export default function Exercise({ name, sets, reps, tempo, rest, children }) {
  return (
    <div style={style}>
      <h4>
        {name}
        <br />
        <LabelAndValue label="Sets" value={sets} />
        {' '}
        <LabelAndValue label="Reps" value={reps} />
        {' '}
        <LabelAndValue label="Tempo" value={tempo} />
        {' '}
        <LabelAndValue label="Rest" value={`${rest}s`} />
      </h4>
      {children}
    </div>
  );
}
