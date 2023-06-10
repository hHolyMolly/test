import React from 'react';
import { useDispatch } from 'react-redux';

type DataType = string;

function useState(data: DataType, action: any) {
  const dispatch = useDispatch();

  const local = window.localStorage.getItem(data) || '[]';

  React.useEffect(() => {
    const parse = JSON.parse(local);

    dispatch(action(parse));
  }, []);
}

export default useState;
