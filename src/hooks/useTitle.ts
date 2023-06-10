import React from 'react';

function useTitle(title: string) {
  React.useLayoutEffect(() => {
    window.document.title = title;
  }, [title]);
}

export default useTitle;
