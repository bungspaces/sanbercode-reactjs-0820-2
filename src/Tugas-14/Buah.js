import React from 'react'
import { FruitProvider } from './BuahContext'
import TableBuah from './TableBuah'
import BuahForm from './BuahForm'

const Fruit = () => {
    return(
        <FruitProvider>
            <TableBuah />
            <BuahForm />
        </FruitProvider>
    )
}

export default Fruit