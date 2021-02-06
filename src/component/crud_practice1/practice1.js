import React, { useEffect, useState } from 'react'
export const Practice1 = () => {
    const [tr_line, setTr] = useState([]);
    let tr_id = 0;
    const inputKey = (e) => {
        tr_id++;
        let td = `<td> ${e.target.value} </td>`

            //
            if(e.key === 'Enter'){
                setTr(() => ({
                    id: tr_id,
                    ...tr_line,
                    td
                }))
            }
    }
    console.log(tr_line)

    const deleteHandle = (e) => {
        let done = window.confirm("Are you sure to delete it?")
        if (done === true)
            e.target.parentElement.parentElement.remove()
    }

    return (
        <div className="w-75 mx-auto">
            <div className="form-group">
                <input type="text"
                    className="form-control"  name="" onKeyUp={inputKey} id="" aria-describedby="helpId" placeholder="Enter your name" />
            </div>
            <table className="table shadow-sm border-0">

                <tbody>
                <tr>
                    {tr_line.map(v=> v.td)}
                </tr>
                </tbody>
            </table>
        </div>
    )
}