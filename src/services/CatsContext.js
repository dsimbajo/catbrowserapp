import React from 'react';

const CatsContext = React.createContext({ selectedCat: undefined, changeSelectedCat: () => {}});

export default CatsContext;