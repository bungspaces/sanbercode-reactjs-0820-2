import React from 'react'
import { Switch, Route } from 'react-router'
import Switcher from './Switcher'

// Component Tugas - Tugas
import Tugas9 from '../Tugas-9/Tugas-9'
import Tugas10 from '../Tugas-10/Tugas-10'
import Tugas11 from '../Tugas-11/clock'
import Tugas12 from '../Tugas-12/Tugas-12'
import Tugas13 from '../Tugas-13/Tugas-13'
import Fruit from '../Tugas-14/Buah'
/* 
import Tugas9 from "../src/Tugas-9/Tugas-9";
import Tugas10 from "../src/Tugas-10/Tugas-10";
import Tugas11 from "../src/Tugas-11/clock";
import Tugas12 from "../src/Tugas-12/Tugas-12";
import Tugas13 from "../src/Tugas-13/Tugas-13";
import Tugas14 from "../src/Tugas-14/Buah.js";
import Tugas15 from  "../src/Tugas-15/Routes.js"; */

const Home = () => {
    return (
        <header><h1>Selamat Datang</h1></header>
    )
}

const Routes = () => {
    return (
        <>
            <Switcher />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/Tugas-9' >
                    <br />
                    <header><h1>Tugas 9</h1></header>
                    <br />
                    <Tugas9 />
                </Route>
                <Route path='/Tugas-10' >
                    <br />
                    <header><h1>Tugas 10</h1></header>
                    <br />
                    <Tugas10 />
                </Route>
                <Route path='/Tugas-11'>
                    <br />
                    <header><h1>Tugas 11</h1></header>
                    <br />
                    <Tugas11 />
                </Route>
                <Route path='/Tugas-12'>
                    <br />
                    <header><h1>Tugas 12</h1></header>
                    <br />
                    <Tugas12 />
                </Route>
                <Route path='/Tugas-13'>
                    <br />
                    <header><h1>Tugas 13</h1></header>
                    <br />
                    <Tugas13 />
                    <br />
                    <Tugas13 />
                </Route>
                <Route path='/Tugas-14'>
                    <br />
                    <header><h1>Tugas 14</h1></header>
                    <br />
                    <Fruit />
                </Route>
            </Switch>
        </>
    )
}

export default Routes