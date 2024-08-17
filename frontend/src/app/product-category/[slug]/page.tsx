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
            <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
              <p>Showing all 12 results</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>Product 1</div>
              <div>Product 2</div>
              <div>Product 3</div>
              <div>Product 4</div>
              <div>Product 5</div>
              <div>Product 6</div>
            </div>

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
