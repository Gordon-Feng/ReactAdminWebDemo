import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function TopMenu() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/school-manage" data-testid='school-manage'>
        SchoolManage
      </Link>
      <Link color="inherit" href="/login" data-testid='login'>
        Login
      </Link>
    </Breadcrumbs>
  );
}