import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { getInformations, handleCountry } from '../../actions/actions';

function CountryPicker() {
  const { country } = getInformations();

  return (
    <div className="my-4 w-25 mx-auto">
      <ReactFlagsSelect
        selected={country}
        onSelect={handleCountry}
        placeholder="Global"
        searchable="true"
      />
    </div>
  );
}

export default CountryPicker;
