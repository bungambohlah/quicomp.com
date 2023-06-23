import { FormEvent } from 'react';
import OrderTable, { OrderType } from '~/components/domain/layouts/user/table/OrderTable';
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon';
import { useAuthState } from '~/components/contexts/UserContext';
import { UserLayout as Layout } from '~/components/domain/layouts/user/UserLayout';
import { PageProps } from '~/renderer/types';
import Modal from '~/components/atomic/Modal';

const FormCreate = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Name?</span>
      </label>
      <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

type WindowWithModal = typeof window & { create_order?: { showModal?: () => void; close?: () => void } };

function Page({ orders }: PageProps) {
  const { state } = useAuthState();
  const ordersWithType = orders as OrderType[];
  const ordersFiltered = ordersWithType.filter((x) => x.email === state.currentUser?.email);
  const windowCreateOrder: WindowWithModal = window;

  function createOrder(e: FormEvent) {
    e.preventDefault();
    // get form data
    if (e.currentTarget instanceof HTMLFormElement) {
      const form: HTMLFormElement = e.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries());
      alert(`Form data: ${JSON.stringify(data)}`);
      e.currentTarget.reset();
      windowCreateOrder.create_order?.close?.();
    }
  }

  return (
    <>
      <Modal id="create_order" title="Tambah Order" content={<FormCreate />} onSubmit={createOrder} />
      <div className="min-h-screen">
        <div className="flex items-center w-full">
          <span>Selamat datang, {state.currentUser?.displayName || 'User'}</span>
          <div className="flex items-center justify-end ml-auto">
            <button
              className="flex items-center justify-center w-10 rounded-full btn-ghost btn-circle"
              title="Tambah Permasalahan"
              onClick={() => windowCreateOrder.create_order?.showModal?.()}
            >
              <PlusCircleIcon />
            </button>
          </div>
        </div>
        <OrderTable datas={ordersFiltered} />
      </div>
    </>
  );
}

const documentProps = {
  title: 'Quicomp | User Dashboard',
};

export { Page, Layout, documentProps };
