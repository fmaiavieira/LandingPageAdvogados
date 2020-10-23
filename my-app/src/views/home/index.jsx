import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Contato from '../../components/Contato'
import InfosEscritorio from '../../components/infos-escritorio'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <InfosEscritorio />
            <Contato />
        </>
    )
}

export default Home