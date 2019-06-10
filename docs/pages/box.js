import React from 'react';

import Code from '../components/Code';

const Box = () => (
  <div>
    <h1>Box</h1>
    <p>
      Box renders a React Native <code>View</code> component.
    </p>
    <h2>Usage</h2>
    <Code>{`<Box justifyContent="center" alignItems="center">
  <Box bg="cornflowerblue" width={128} height={128} shadow={1} />
</Box>`}</Code>
    <h2>Props</h2>
    <ul>
      <li>
        <code>alignItems?: </code>
        {`ViewStyle['alignItems']`}
      </li>
      <li>
        <code>alignSelf?: </code>
        {`ViewStyle['alignSelf']`}
      </li>
      <li>
        <code>border?: </code>
        {`number | { borderWidth?: number; borderColor?: string; } (index from your borders array or a Border object)`}
      </li>
      <li>
        <code>flex?: </code>
        number
      </li>
      <li>
        <code>flexDirection?: </code>
        {`ViewStyle['flexDirection']`}
      </li>
      <li>
        <code>flexWrap?: </code>
        {`ViewStyle['flexWrap']`}
      </li>
      <li>
        <code>height?: </code>
        number
      </li>
      <li>
        <code>justifyContent?: </code>
        {`ViewStyle['justifyContent']`}
      </li>
      <li>
        <code>m?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>mb?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>ml?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>mr?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>mt?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>mx?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>my?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>p?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>pb?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>pl?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>pr?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>pt?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>px?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>py?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>shadow?: </code>
        {`number | { elevation?: number; shadowColor?: string | string; shadowOffset?: { height: number; width: number }; shadowOpacity?: number | number; shadowRadius?: number; } (index from your shadows array or a Shadow object)`}
      </li>
      <li>
        <code>width?: </code>
        number
      </li>
      <code>Any View props</code>
    </ul>
  </div>
);

export default Box;
