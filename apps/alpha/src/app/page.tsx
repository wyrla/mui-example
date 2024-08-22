'use client';

import { IconButton, Button } from 'ui-components';
import AlphaButton from '../components/button';

export default function Index() {
  return (
    <>
      <p>Index page</p>
      {/* styled from mui */}
      <Button>styled from mui</Button>
      {/* styled from emotion */}
      <IconButton>😑</IconButton>
      {/* styled with emotion but using button component thats uses styled from mui (aka use material theme) */}
      <AlphaButton>emotion + mui</AlphaButton>
    </>
  );
}
