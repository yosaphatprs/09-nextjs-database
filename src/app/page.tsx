import { Card } from '@/app/components/molecules/card';
import RevenueChart from '@/app/components/molecules/revenue-chart';
import LatestInvoices from '@/app/components/molecules/latest-invoices';
import { lusitana } from '@/app/components/atoms/fonts';
import { fetchCardData } from './model/query';

export default async function Page() {

  const card = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={card.totalPaidInvoices} type="collected" />
        <Card title="Pending" value={card.totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={card.numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={card.numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-12">
        <RevenueChart />
        <LatestInvoices />
      </div>
    </main>
  );
}