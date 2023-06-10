import React from 'react';

import styles from './Cross.module.scss';

const classC = `
	border-grey-300
	before:bg-grey-300 after:bg-grey-300
	hover:border-grey-500 hover:before:bg-grey-500 hover:after:bg-grey-500

	before:bg-grey-300 after:bg-grey-300
`;

type CrossProps = {
  onClick?: () => void;
};

const Cross: React.FC<CrossProps> = ({ onClick }) => {
  return <button className={`${styles.cross} ${classC}`} onClick={onClick} type="button" />;
};

export default React.memo(Cross);
