import React, {useState, useEffect} from 'react';
import Table from './Table';
import {days, days_english} from './utils/days';

const Organizer = () => {
    
    const [name, setName] = useState('جدول');
    const [cell, setCell] = useState('');
    const [day, setDay] = useState('sat');
    const [period, setPeriod] = useState(0);
    const [daysTable, setDays] = useState({
        "sat": Array(6).fill(''),
        "sun": Array(6).fill(''),
        "mon": Array(6).fill(''),
        "tue": Array(6).fill(''),
        "wed": Array(6).fill(''),
        "thu": Array(6).fill(''),
        "fri": Array(6).fill('')
    });
    const [tableObj, setTableObj] = useState({
        name,
        days: {...daysTable}
    });

    useEffect(() => {
        setTableObj({
            name,
            days: {...daysTable}
        })
    }, [name, setName, daysTable, setDays])

    useEffect(() => {
        let newDaysTable = Object.assign({}, daysTable);
        newDaysTable[day][period] = cell;
        setDays(newDaysTable);
    }, [cell, setCell, period, setPeriod, day, setDay]);

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
        setCell(daysTable[day][e.target.value]);
    }

    const handleDayChange = (e) => {
        setDay(e.target.value);
        setPeriod(0)
        setCell(daysTable[e.target.value][period]);
    }

    return (
        <div>
            <div>
                <label htmlFor="table-name">اسم الجدول</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} id="table-name" />
            </div>
            <div>
                <label>اليوم</label>
                <select value={day} onChange={handleDayChange}>
                    {days.map((day, i) => <option value={days_english[i]} key={days_english[i]}>{day}</option>)}
                </select>
            </div>
            <div>
                <label>الفترة</label>
                <select value={period} onChange={handlePeriodChange}>
                    <option value="0">8:30 - 10 (الاولى)</option>
                    <option value="1">10:20 - 12:00 (الثانية)</option>
                    <option value="2">12:10 - 1:50 (الثالثة)</option>
                    <option value="3">2:00 - 3:40 (الرابعة)</option>
                    <option value="4">3:50 - 5:30 (الخامسة)</option>
                    <option value="5">5:40 - 7:20 (السادسة)</option>
                </select>
            </div>
            <div>
                <label htmlFor="">القيمة</label>
                <input type="text" value={cell} onChange={e => setCell(e.target.value)} />
            </div>
            <Table tableObj={tableObj} />
        </div>
    )
}

export default Organizer;