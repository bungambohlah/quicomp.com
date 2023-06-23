import { Prisma } from '@prisma/client';
import React from 'react';

export const columns = ['', 'Nama', 'Tipe Komputer', 'Permasalahan'];

export type OrderType = Prisma.OrderGetPayload<{}>;

type OrderTableProps = {
  datas: OrderType[];
};

function OrderTable({ datas }: OrderTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra">
        {/* head */}
        <thead>
          <tr>
            {columns.map((col, idx) => {
              return <th key={idx}>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{data.name}</td>
              <td>{data.computer_type}</td>
              <td>{data.description}</td>
              <td>
                {data.status === 'pending' && <div className="badge badge-warning">Menunggu</div>}
                {data.status === 'progress' && <div className="badge badge-info">Proses</div>}
                {data.status === 'done' && <div className="badge badge-success">Selesai</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
