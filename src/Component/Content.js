import React from 'react'

class Content extends React.Component{
    render(){
        return(
            <div className='Content'>
                <h3>Ini Class</h3>
                <p>{this.props.namaKelas}</p>
            </div>
        )
    }
}
export default Content