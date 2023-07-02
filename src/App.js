import React, {Suspense, lazy} from "react"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppHome from "./Components/Home/AppHome"
import AppGame from "./Components/Game/AppGame"
import Layout from "./Layout"

const AppNotes = lazy(() => import('./Components/Notes/AppNotes'))

export default function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<AppHome />} />
                    <Route path="game" element={<AppGame />} />
                    <Route path="notes" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AppNotes />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
   