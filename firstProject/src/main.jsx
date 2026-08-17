import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstComponent } from './FirstComponent'
import ApniMarziKaNamm from './SecondComponent'
import {ThirdComponent as EkAurNaam} from './SecondComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyCardComponent } from './MyCardComponent'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello World</h1>
    <FirstComponent></FirstComponent>
    <ApniMarziKaNamm></ApniMarziKaNamm>
    <EkAurNaam></EkAurNaam>
    <MyCardComponent></MyCardComponent>
  </StrictMode>,
)
