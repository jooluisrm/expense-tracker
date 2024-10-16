"use client"

import { items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";

const App = () => {

    const [list, setList] = useState(items);
    const [filteredList, setFilterdList] = useState<Item[]>([]);
    const [currentMhonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilterdList(filterListByMonth(list, currentMhonth));
    }, [list, currentMhonth]);

    return (
        <div className="">
            <header className="bg-blue-800 h-36 text-center min-w-full">
                <h1 className="text-white m-0 p-0 pt-8 text-3xl font-bold">Sistema Financeiro</h1>
            </header>

            <div className="container mx-auto max-w-[980px] mb-12 ">
                {/* Area de informações */}

                {/* Area de inserção */}

                {/* tabela de itens */}
            </div>
        </div>
    );
}

export default App;