import React from 'react'
import myLogo from '../assets/react.svg'
import '../colors.css'
import '../App.css'

export default props => {
    return(
        <>
            <div className='navbar bg-primary'>
                <div className='container navbar-content'>
                    <div className='navbar-brand'>
                        <img className='logo' src={myLogo} alt="" />
                        <div className='brand-name'>
                            <h3 className='brand-text a-tx-white'>Kelly Rebeca</h3>
                        </div>
                    </div>
                    
                    <div className='navbar-actions'>
                        <a href="">
                            <h3 className='a-tx-white'>Contatos</h3>
                        </a>
                        <a href="">
                            <h3 className='a-tx-white'>Projetos</h3>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}