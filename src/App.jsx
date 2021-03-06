import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import { EuiProvider } from '@elastic/eui';
import Header from  './components/Header'
import BasicSearch from './pages/BasicSearch'
import NeuralSearch from './pages/NeuralSearch';
import SearchResults from './pages/SearchResults'
import DetailPage from './pages/DetailPage'
import ProSearch from './pages/ProSearch';
import AdvancedSearch from './pages/AdvancedSearch';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css'

export default class App extends Component {
    render() {
        return (
            <EuiProvider colorMode='light'>
                <div className='app'>
                    <Header/> 
                    <Switch>
                        <Route path='/basicSearch' component={BasicSearch}/>
                        <Route path='/searchResults' component={SearchResults}/>
                        <Route path='/detailPage' component={DetailPage}/>
                        <Route path='/advancedSearch' component={AdvancedSearch}/>      
                        <Route path='/proSearch' component={ProSearch}/>      
                        <Route path='/neuralSearch' component={NeuralSearch}/>                    
                        <Redirect to='/basicSearch'/>
                    </Switch>
                </div>
            </EuiProvider>
            
        )
    }
}
