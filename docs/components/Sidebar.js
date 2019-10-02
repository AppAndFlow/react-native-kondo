import React from 'react';
import Link from 'next/link';

const Sidebar = () => (
  <div>
    <div className="sidebar">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/index#installation">
        <a>Installation</a>
      </Link>
      <Link href="/index#usage">
        <a>Usage</a>
      </Link>
      <Link href="/index#theme">
        <a>Theme</a>
      </Link>
      <span>&nbsp;</span>
      <Link href="/box">
        <a>Box</a>
      </Link>
      <Link href="/text">
        <a>Text</a>
      </Link>
      <Link href="/touchable">
        <a>Touchable</a>
      </Link>
      <span>&nbsp;</span>
      <Link href="/touchable">
        <a
          href="https://github.com/AppAndFlow/react-native-kondo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Link>
    </div>
    <style jsx>{`
      .sidebar {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 1rem;
        position: sticky;
        top: 0;
      }
    `}</style>
  </div>
);

export default Sidebar;
