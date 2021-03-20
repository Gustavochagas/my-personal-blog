import React, { useState } from 'react';
import { Flex } from '../Flex';
import { Content, Input, Span, SwitchBlock, SwitchLabel } from './styles';

type PropTypes = {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  onChange?: (value: boolean) => void;
};

export const Switch = ({
  disabled = false,
  checked = false,
  label,
  onChange,
}: PropTypes) => {
  const [active, setActive] = useState(checked);

  function onChangeLocal() {
    setActive(!active);
    if (onChange) {
      return onChange(!active);
    } else {
      return;
    }
  }

  return (
    <Flex>
      <Content>
        {label && <SwitchLabel>{label}</SwitchLabel>}
        <SwitchBlock>
          <Input type="checkbox" checked={active} onChange={onChangeLocal} />
          <Span active={active} />
        </SwitchBlock>
      </Content>
    </Flex>
  );
}