import React from 'react';
import { Button } from '../../UI';

type OopsProps<T = string> = {
  title: T;
  text: T;
  navigation?: boolean;
};

function Oops({ title, text, navigation = true }: OopsProps) {
  return (
    <div className="flex flex-col justify-center items-center flex-auto">
      <div className="mb-5">
        <img src="./img/emoji/sad.png" alt="Sad" />
      </div>
      <div className="mb-2.5">{title}</div>
      <div className="mb-10">{text}</div>
      {navigation && (
        <Button arrow="before" tag="Link">
          Вернуться назад
        </Button>
      )}
    </div>
  );
}

export default Oops;
