import React from 'react';

const Code = props => (
  <div>
    <div className="code-container">
      <pre>
        {/* eslint-disable-next-line react/prop-types */}
        <code>{props.children}</code>
      </pre>
    </div>
    <style jsx>{`
      .code-container {
        padding: 1rem;
        border: 1px solid black;
        background: rgba(238, 236, 137, 0.2);
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
      }
    `}</style>
  </div>
);

export default Code;
