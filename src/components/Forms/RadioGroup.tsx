import {Radio} from 'antd';
import React, { ReactNode } from 'react';
const RadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <Radio.Group>
      {children}
    </Radio.Group>
  );
}


export default RadioGroup;