import React, { useEffect, useState } from 'react'
import { useHyperCube } from '@motor-js/core'
import { config } from './config'

const Button = ({ engine }) => {

    const [ layoutID, setLayoutID] = useState(null)
    const cols = ['country']

    const { qLayout } = useHyperCube({
        engine,
        cols
    })

    useEffect(() => {
        if(!qLayout) return 
        setLayoutID(qLayout.qInfo.qId)
    },[qLayout])

    const handleExport = () => {
        console.log()
        const { host, secure, port, prefix } = config
        const _secure = secure ? 'https://' : 'http://'
        const _port = port ? `:${port}` : ''
        const server = _secure + host + _port + prefix
        engine.getObject(layoutID).then(model => {
            model.exportData('CSV_C', '/qHyperCubeDef','Export', 'P').then(url => {
                window.open(server + url.qUrl, '_blank')
            })
        })
    }

    return (
        <button onClick={handleExport}>Export Data</button>
    )
}

export default Button