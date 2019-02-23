import React from 'react';
import styled from 'styled-components';

import NotificationBellIcon from '../../icons/NotificationBell';
import PinIcon from '../../icons/Pin';
import PeopleIcon from '../../icons/People';
import MentionIcon from '../../icons/Mention';
import QuestionMarkIcon from '../../icons/QuestionMark';
import HeaderSearchBar from './HeaderSearchBar';

const StyledHeaderActionBar = styled.div`
  display: flex;
  align-items: center;

  .divider {
    margin: 0 4px;
    width: 1px;
    height: 22px;
    background: hsla(0, 0%, 84.7%, 0.1);
  }
`;

const StyledIconButton = styled.span`
  margin: 0 4px;
  height: 26px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    opacity: 0.6;

    :hover {
      opacity: 0.8;
    }

    &.active {
      opacity: 1;
    }
  }
`;

export default ({ isMembersListActive, onMembersToggleClick }) => (
  <StyledHeaderActionBar>
    <StyledIconButton>
      <NotificationBellIcon />
    </StyledIconButton>

    <StyledIconButton>
      <PinIcon />
    </StyledIconButton>

    <StyledIconButton onClick={onMembersToggleClick}>
      <PeopleIcon className={isMembersListActive ? 'active' : ''} />
    </StyledIconButton>

    <HeaderSearchBar />

    <div className="divider" />

    <StyledIconButton>
      <MentionIcon />
    </StyledIconButton>

    <StyledIconButton>
      <QuestionMarkIcon />
    </StyledIconButton>
  </StyledHeaderActionBar>
);
