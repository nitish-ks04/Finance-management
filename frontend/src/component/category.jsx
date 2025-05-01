import React from "react";
import Select from 'react-select'


export const Myoptions= [
    { value: '', label: '-- Select --' },
    { value: 'food', label: 'food' },
    { value: 'transport', label: 'transport' },
    { value: 'health', label: 'health' },
    { value: 'entertement', label: 'entertement' },
    { value: 'bill', label: 'bill' },
    { value: 'other', label: 'other' }
]

export const HistoryFilterOptions = [
    { value: 'food', label: 'food' },
    { value: 'transport', label: 'transport' },
    { value: 'health', label: 'health' },
    { value: 'entertement', label: 'entertement' },
    { value: 'bill', label: 'bill' },
    { value: 'other', label: 'other' }
];

const MyComponent = () => {
    return (
        <Select options={Myoptions} />
    )
}

export default MyComponent