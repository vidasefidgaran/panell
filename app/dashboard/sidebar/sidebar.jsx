// app/dashboard/sidebar/sidebar.jsx
"use client"
import { Container, Button } from '@nextui-org/react';

export default function Sidebar() {
  return (
    <Container css={{ padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h1 className="text-2xl font-bold mb-4">Welcome to Next UI</h1>
      <Button>Click me</Button>
    </Container>
  );
}
