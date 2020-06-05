import React from 'react'

function Header(props){
    const listMahasiswa = [
            {
                'nim':'10112299',
                'nama':'ilman teguh prasetya'
            },
            {
                'nim':'10112293',
                'nama':'faris syahroni'
            },
        ]

    const dataMahasiswa = listMahasiswa.map(item=><p>{item.nim}</p>)
    return(
        <div>
            {dataMahasiswa}
            <h3>Hello World {props.name} </h3>
            <p>{props.message}</p>
            <p>{props.count}</p>
            <button onClick={props.tambahCount}>Tambah</button>
            <button onClick={props.sayHai}>Hai</button>
            <button onClick={props.metodeLogout}>Logout</button>
        </div>
    )
}
export default Header