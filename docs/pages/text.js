import React from 'react';

import Layout from '../components/Layout';
import Code from '../components/Code';

const Text = () => (
  <Layout>
    <h1>Text</h1>
    <p>
      Text renders a React Native <code>Text</code> component.
    </p>
    <h2>Usage</h2>
    <Code>{`<Box>
  <Text fontSize={1}>Normal text</Text>
  <Text fontSize={4} letterSpacing={1}>
    Large text
  </Text>
  <Text fontSize={36} letterSpacing={2}>
    Giant text
  </Text>
</Box>`}</Code>
    <h1>Props</h1>
    <ul>
      <li>
        <code>color?: </code>
        string (name from your color object, if it cannot be found, it will be
        used as color)
      </li>
      <li>
        <code>fontFamily?: </code>
        string (name from your fonts object, if nothing is supplied and you
        specified something as base in your fonts object, it will be used)
      </li>
      <li>
        <code>fontSize?: </code>
        number (index from your space array, if negative or higher, it will be
        used as size)
      </li>
      <li>
        <code>fontWeight?: </code>
        {`TextStyle['textAlign']`}
      </li>
      <li>
        <code>letterSpacing?: </code>
        number (index from your space array, if negative or higher, it will be
        used as spacing)
      </li>
      <li>
        <code>lineHeight?: </code>
        number (index from your lineHeights array, if negative or higher it will
        use it as height)
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
        <code>textAlign?: </code>
        {`TextStyle['textAlign']`}
      </li>
      <li>
        <code>Any Text props</code>
      </li>
    </ul>
  </Layout>
);

export default Text;
