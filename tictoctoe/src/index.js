import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game'
// Bước 2: Khai báo DOM root
const root = document.querySelector("#root")
    // Bước 3: Khởi tạo DOM ảo
const reactRoot = ReactDOM.createRoot(root)
    // Bước 4: Render
reactRoot.render(
    <StrictMode>
        <Game/>
    </StrictMode>
)