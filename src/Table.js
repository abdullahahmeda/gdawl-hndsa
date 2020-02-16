import React, {useRef} from 'react';
import DownloadButtons from './DownloadButtons';
import './css/Table.css';
import {days, days_english} from './utils/days';


const Table = ({ tableObj }) => {
    const currentRef = useRef(null);

    return (
        <div className="table-wrapper">
        <table className="table" ref={currentRef}>
            <thead>
                <tr>
                    <th></th>
                    <th>{tableObj.name}</th>
                </tr>
            </thead>
            <tbody>

            {days.map((day, i) => {
                        return (<tr key={i}><td className="no-padding"><table><tbody>
                    <tr>
                        <td>{day} 8:30 - 10</td>
                    </tr>
                    <tr>
                        <td>10:20 - 12:00</td> 
                    </tr>
                    <tr>
                        <td>12:10 - 1:50</td>
                    </tr>
                    <tr>
                        <td>2:00 - 3:40</td>
                    </tr>
                    <tr>
                        <td>3:50 - 5:30</td>
                    </tr>
                    <tr>
                        <td>5:40 - 7:20</td>
                    </tr>
                </tbody></table></td>
                
                <td className="no-padding"><table id={`${days_english[i]}-table`}><tbody>
                    <tr>
                        <td>{tableObj['days'][days_english[i]][0]}</td>
                    </tr>
                    <tr>
                        <td>{tableObj['days'][days_english[i]][1]}</td> 
                    </tr>
                    <tr>
                        <td>{tableObj['days'][days_english[i]][2]}</td>
                    </tr>
                    <tr>
                        <td>{tableObj['days'][days_english[i]][3]}</td>
                    </tr>
                    <tr>
                        <td>{tableObj['days'][days_english[i]][4]}</td>
                    </tr>
                    <tr>
                        <td>{tableObj['days'][days_english[i]][5]}</td>
                    </tr>
                </tbody></table></td>
                </tr>)
                    })}
                
            </tbody>
        </table>
        <DownloadButtons usedRef={currentRef} />
        </div>
    )
}

export default Table;