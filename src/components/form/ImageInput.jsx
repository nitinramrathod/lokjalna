import ErrorText from '@/ui/common/form.styld'

import React from 'react'
import { Form } from 'react-bootstrap'

const ImageInput = ({
    error,
    name,
    label,
    placeholder,
    innerRef,
    src
}) => {
    return (
        <div>
            <label className='mb-2' htmlFor={name + '_id'}>{label}</label>
            <div>
                <Form.Control
                    type="file"
                    id={name + '_id'}
                    name={name}
                    ref={innerRef}
                    placeholder={placeholder}
                />
                {src && <img src={src} width={100} alt="" />}
            </div>
            {error && <ErrorText>{error}</ErrorText>}

        </div>
    )
}

export default ImageInput