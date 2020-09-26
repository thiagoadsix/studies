import React, { useMemo } from 'react'
import { format } from 'date-fns'

import typeIcons from '../../utils/typeIcons'

import { Container, TopCard, BottomCard } from './style'

function TaskCard({ type, title, when, done }) {
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'))
    const hour = useMemo(() => format(new Date(when), 'HH:mm'))


    return (
        <Container done={done}>
            <TopCard>
                <img src={typeIcons[type]} alt="Icon Task" />
                <h3>{title}</h3>
            </TopCard>
            <BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </BottomCard>
        </Container>
    )
}

export default TaskCard;