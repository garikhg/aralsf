import { PageHeader } from '@/components/page-header';

export default async function SingleCategory() {
  return (
    <div>
      <PageHeader
        title="Beer"
      />

      <main className="py-24" role="main">
        <div className="container grid grid-cols-4 gap-x-16">
          <Filters />

          <div className="col-span-3">
            Single Category
          </div>
        </div>
      </main>
    </div>
  );
}

const Filters = () => {
  return (
    <aside className="">
      Products Filters
    </aside>
  );
};
