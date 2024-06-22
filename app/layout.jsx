// app/layout.jsx
"use client"
import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';

export default function RootLayout({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}


