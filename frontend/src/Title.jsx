import React from 'react'

const Title = ({ name, subTitle }) => {
    console.log(name, subTitle)
    return (
        <>
            <div>{name}</div>
            {subTitle ? <h1>{subTitle}</h1> : <h2>no sub subtitle passed</h2>}

        </>

    )
}

export default Title
