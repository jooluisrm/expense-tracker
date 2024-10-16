"use client"

import { InfoArea } from "@/components/InfoArea";
import { TableArea } from "@/components/TableArea";
import { categories } from "@/data/categories";
import { items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";

const App = () => {

    const [list, setList] = useState(items);
    const [filteredList, setFilterdList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        setFilterdList(filterListByMonth(list, currentMonth));
    }, [list, currentMonth]);

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for(let i in filteredList) {
            if(categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;
            }
        }
        
        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [filteredList]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    }
    
    return (
        <div className="">
            <header className="bg-blue-800 h-36 text-center min-w-full">
                <h1 className="text-white m-0 p-0 pt-8 text-3xl font-bold">Sistema Financeiro</h1>
            </header>

            <div className="container mx-auto max-w-[980px] mb-12 ">
                <InfoArea 
                currentMonth={currentMonth}
                onMunthChange={handleMonthChange}
                income={income}
                expense={expense}
                />

                {/* Area de inserção */}

                <TableArea list={filteredList}/>
            </div>
        </div>
    );
}

export default App;