'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ErrorText from '@/ui/common/form.styld';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const RTEInput = ({
  value = '',
  onChange,
  placeholder,
  name,
  error,
  label,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures we only render after the component has mounted
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ height: '300px' }}>
      <label className="mb-2" htmlFor={name + '_id'}>
        {label}
      </label>
      <ReactQuill
        id={name + '_id'}
        placeholder={placeholder}
        theme="snow"
        value={value}
        name={name}
        onChange={(val) => onChange(val, name)}
        style={{ height: '200px' }}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default RTEInput;