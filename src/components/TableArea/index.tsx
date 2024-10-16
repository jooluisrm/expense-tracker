import { Item } from "@/types/Item";

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <table className="w-full bg-white shadow-md rounded-xl p-5 mt-5">
            <thead>
                <tr>
                    <th className="pt-3 text-left w-[100px]">Data</th>
                    <th className="pt-3 text-left w-[130px]">Categoria</th>
                    <th className="pt-3 text-left w-auto">Titulo</th>
                    <th className="pt-3 text-left w-[150px]">Valor</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td>{item.title}</td>
                        <td></td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
}