import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { searchCountries } from '../store/countriesSlice';

import Panel from '../components/Panel';
import Search from '../components/ui/Search';
import Select from '../components/ui/Select';

const Controls = () => {

    const [name, setName] = useState('');
    const [region, setRegion] = useState('');

    const dispatch = useDispatch();
    const error = useSelector(state => state.countries.error);

    const regions = useMemo(() => [
        {value: 'africa', label: 'Africa'},
        {value: 'america', label: 'America'},
        {value: 'asia', label: 'Asia'},
        {value: 'europe', label: 'Europe'},
        {value: 'oceania', label: 'Oceainia'},

    ], [])

    useEffect(() => {
        dispatch(searchCountries({name: name, region: region}))
    }, [name, region])
    
    return (
        <Panel>
            <Search 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                disabled={!!error}
            />
            
            <Select 
                value={region} 
                onChange={(e) => setRegion(e.target.value)}
                disabled={!!error}
            >
                <option value='' selected disabled hidden>Filter by region</option>
                <option value=''>All</option>
                {regions.map(region =>
                    <option key={region.value} value={region.value}>{region.label}</option>    
                )}
            </Select>
        </Panel>
    );
}

export default memo(Controls);
