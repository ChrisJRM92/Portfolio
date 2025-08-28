// import { StrictMode } from 'react'
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'
import './i18n';

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading translations...</div>}>
        <App />
    </Suspense>
)
