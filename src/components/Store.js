import React from 'react'

function Store({name, image, season, episode}) {
    return (
    <tr>
        <td className="row-name">
            <span>{name}</span>
        </td>
        <td>
            <a href={image} target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>{season}</span>
        </td>
        <td>
            <span>{episode}</span>
        </td>
    </tr>
    );
}

export default Store