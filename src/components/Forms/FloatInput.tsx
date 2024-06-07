// InputText.js
import React, { useState } from 'react';
import { Form, Input } from 'antd';
import styled, { css } from 'styled-components';

const FloatLabelWrapper = styled.div`
    position: relative;
`;

const StyledLabel = styled.label`
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 11px;
    transition: 0.2s ease all;
    color: gray;

    ${(props) =>
            props.isOccupied &&
            css`
                top: -8px;
                font-size: 12px !important;
                background: white;
                padding: 0 4px;
                margin-left: -4px;
                color: initial;
            `}
`;

const RequiredMark = styled.span`
  color: red;
`;

const InputText = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required } = props;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  return (
    <Form.Item name={props.name} rules={props.rules}>
      <FloatLabelWrapper
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        <Input defaultValue={props.defaultValue} onChange={props.onChange} type={type} />
        <StyledLabel isOccupied={isOccupied}>
          {isOccupied ? label : placeholder} {required && <RequiredMark>*</RequiredMark>}
        </StyledLabel>
      </FloatLabelWrapper>
    </Form.Item>
  );
};

export default InputText;
