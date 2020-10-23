import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Especialidade from '../../components/Especialidade'
import Contato from '../../components/Contato'
import Footer from '../../components/footer'
import InfosEscritorio from '../../components/infos-escritorio'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Especialidade />
            <InfosEscritorio />
            <Contato />
            <Footer />
        </>
    )
}

export default Home