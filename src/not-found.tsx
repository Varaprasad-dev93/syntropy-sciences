import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { NotFound } from './NotFound';
import './styles.css';

const root = document.getElementById('root')!;
const page = (
  <StrictMode>
    <NotFound />
  </StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, page);
else createRoot(root).render(page);
