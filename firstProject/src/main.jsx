import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstComponent } from './FirstComponent'
import ApniMarziKaNamm from './SecondComponent'
import {ThirdComponent as EkAurNaam} from './SecondComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello World</h1>
    <FirstComponent></FirstComponent>
    <ApniMarziKaNamm></ApniMarziKaNamm>
    <EkAurNaam></EkAurNaam>
  </StrictMode>,
)
