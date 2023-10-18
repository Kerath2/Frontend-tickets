import React from 'react';
import './_user-menu.scss';
import { OverflowMenu } from 'carbon-components-react';
import { OverflowMenuItem } from '@carbon/react';
import { UserAvatar } from '@carbon/icons-react';

const UserMenu = () => {
  return (
    <div>
      <OverflowMenu  aria-label="overflow-menu" renderIcon={() => <UserAvatar size={20} />}>
        <OverflowMenuItem itemText="Stop app" />
        <OverflowMenuItem itemText="Restart app" />
        <OverflowMenuItem itemText="Rename app" />
        <OverflowMenuItem itemText="Clone and move app" disabled requireTitle />
        <OverflowMenuItem itemText="Edit routes and access" requireTitle />
        <OverflowMenuItem hasDivider isDelete itemText="Delete app" />
      </OverflowMenu>
    </div>
  );
};

export default UserMenu;
