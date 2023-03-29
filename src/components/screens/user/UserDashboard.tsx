import OrderTable, { OrderType } from '~/components/domain/layouts/user/table/OrderTable';
import { Head } from '~/components/shared/Head';
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon';
import { useAuthState } from '~/components/contexts/UserContext';

function UserDashboard() {
  const { state } = useAuthState();
  const datas: OrderType[] = [
    { name: 'afif', computer_type: 'ASUS A453E', computer_problem_desc: 'keyboard rusak', status: 'progress' },
    { name: 'apep', computer_type: 'Lenovo Thinkpad A5', computer_problem_desc: 'webcam rusak', status: 'done' },
  ];

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen">
        <div className="flex items-center w-full">
          <span>Selamat datang, {state.currentUser?.displayName || 'User'}</span>
          <div className="flex items-center justify-end ml-auto">
            <button
              className="flex items-center justify-center w-10 rounded-full btn-ghost btn-circle"
              title="Tambah Permasalahan"
            >
              <PlusCircleIcon />
            </button>
          </div>
        </div>
        <OrderTable datas={datas} />
      </div>
    </>
  );
}

export default UserDashboard;
