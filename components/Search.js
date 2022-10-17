import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useTranslations } from 'next-intl';

import { spacing } from '../config/theme';

const Search = ({ data, setData }) => {
  const t = useTranslations('Search');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = filteredData.filter((wine) =>
      wine.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setData(searchedProducts);
    setFilteredData(filteredData);
  };

  return (
    <>
      <div className="container">
        <div className="search">
          <TextField
            id="outlined-basic"
            label={t('search')}
            variant="outlined"
            onChange={handleSearch}
          />
        </div>
      </div>

      <style jsx>{`
        .search {
          margin-bottom: ${spacing.large};
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Search;
