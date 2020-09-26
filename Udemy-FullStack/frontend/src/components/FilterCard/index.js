import React from 'react'

import { Container } from './style'

import filter from '../../assets/filter.png'

function FilterCard({ title, activated }) {
    return (
        <Container activated={activated}>
            <img src={filter} alt="Filter" />
            <span>{title}</span>
        </Container>
    )
}

export default FilterCard