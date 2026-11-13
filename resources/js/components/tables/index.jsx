import { useMemo, useState } from "react"

export const Td = {{ children, className }} => {
    return (
        <td className={`${className} border p-2 text-sm border-stone-300 dark:border-stone-600 dark:text-white`}>
            {children}
        </td>
    )
}

const Table = ({ data, headerr, row, TopContent }) => {
    const [cari, setCari] = useState("")
    const [menampilkan, setMenampilkan] = useState(10)


    const result = useMemo(() => {
        if (cari == "") {
            return data
        } else {
            return data.filter((f) => {
                return f.search.includes(cari.toLowerCase())
            })
        }
    }, [cari, data])
    return ()
}