import ErrorText from '@/pages/common/form.styld';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const RTEInput = ({
    value = "",
    onChange,
    placeholder,
    name,
    error,
    label
}) => {

    return (
        <div style={{ height: '300px' }}>
            <label className='mb-2' htmlFor={name+'_id'}>{label}</label>
            <ReactQuill
            id={name+'_id'}
                placeholder={placeholder}
                theme="snow"
                value={value}
                name={name}
                onChange={(val)=>onChange(val, name)}
                style={{ height: '200px' }}
            />
            {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
            {error && <ErrorText>{error}</ErrorText>}
        </div>
    );
};

export default RTEInput;