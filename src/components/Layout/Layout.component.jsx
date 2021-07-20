import React from 'react';

import './Layout.styles.scss';

function Layout({ children }) {
  return <main className="container">{children}</main>;
}

export default Layout;
