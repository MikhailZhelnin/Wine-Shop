import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { spacing, size, color } from '../config/theme';

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
          <input
            type="text"
            onChange={handleSearch}
            className="search__input"
            placeholder={t('search')}
          />
        </div>
      </div>

      <style jsx>{`
        .search {
          margin-bottom: ${spacing.large};
          display: flex;
          justify-content: center;
        }
        .search__input {
          width: 300px;
          padding: ${spacing.tiny} ${spacing.tiny};
          font-size: ${size.text.large};
          color: ${color.text.dark};
          border: 1px solid #b6b6b6;
          outline: none;
        }
        .search__input:focus {
          background-color: ${color.background.white_darker};
        }
        input[type='text'].search__input::-webkit-input-placeholder {
          color: ${color.text.dark};
        }
      `}</style>
    </>
  );
};

export default Search;
