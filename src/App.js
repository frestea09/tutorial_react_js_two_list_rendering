import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            'name':'ilman',
            'count':0,
            'threshold':true,
           
        }
        this.sayHai = this.sayHai.bind(this)
        this.loginPengguna = this.loginPengguna.bind(this)
        this.incraseCount = this.incraseCount.bind(this)
    }
    sayHai(){
        alert('Hallo Ilman')
    }
    loginPengguna(){
        this.setState(
            {
                'threshold':false,
            }
        )
    }
    incraseCount(){
        this.setState(
            {'count' : this.state.count + 1},
        )
    }
    render(){
        let message 
        if(this.state.threshold){
            message = 'login'
        }else{
            message = 'logout'
        }
        return(
            <div className='App'>
                <Header name={this.state.name} tambahCount = {this.incraseCount} count = {this.state.count} sayHai = {this.sayHai} message={message} metodeLogout = {this.loginPengguna}/>
                <Content namaKelas={'faris'} tambahCount = {this.incraseCount}/>
            </div>
        )
    }
}
export default App