import { Item } from "@/types/Item";
import { useState } from "react";

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputValue, setInputValue] = useState(0);
    const [inputCategoria, setInputCategoria] = useState('');
    const [inputDate, setInputDate] = useState('');

    const handleAddEvent = () => {
        if (inputCategoria === '' || inputTitle === '' || inputValue === 0 || inputDate === '') return alert("Preencha os campos para continuar");

        const [year, month, day] = inputDate.split('-').map(Number);

        let newItem: Item = {
            date: new Date(year, month -1, day),
            category: inputCategoria,
            title: inputTitle,
            value: inputValue
        }
        onAdd(newItem);
        setInputTitle('');
        setInputValue(0);
        setInputCategoria('');
        
    }

    const pegarData = (value: string) => {
        setInputDate(value);
    }

    return (
        <div className="bg-white shadow-xl rounded-xl p-5 mt-5">
            <div className="grid grid-cols-5 items-center gap-3">

                <div className="flex flex-col">
                    <label htmlFor="data" className="text-xl font-bold">Data</label>
                    <input type="date" name="" id="data" className="border rounded-lg p-1" onChange={(e) => pegarData(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="categoria" className="text-xl font-bold">Categoria</label>
                    <select name="" id="categoria" className="border rounded-lg p-1" onChange={(e) => setInputCategoria(e.target.value)}>
                        <option value=""></option>
                        <option value="food">Alimentação</option>
                        <option value="rent">Aluguel</option>
                        <option value="salary">Salario</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="title" className="text-xl font-bold">Título</label>
                    <input
                        id="title"
                        type="text"
                        className="border rounded-lg p-1"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="value" className="text-xl font-bold">Valor</label>
                    <input
                        id="value"
                        type="number"
                        min={0}
                        className="border rounded-lg p-1"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.valueAsNumber)}
                    />
                </div>
                <div className="w-full pt-5">
                    <button onClick={handleAddEvent} className="bg-[#ADD7E4] rounded-lg w-full pt-1 px-2">Adicionar</button>
                </div>

            </div>

        </div>
    );
}