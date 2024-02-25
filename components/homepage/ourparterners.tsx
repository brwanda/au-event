import { MyPartern } from '@/parterners';

export default function Component() {
    return (
      <section aria-label="Our Affiliates" className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold uppercase mb-6">Our Affiliates</h2>
          <div className="flex overflow-x-auto space-x-2">
          {
        MyPartern.map((MyPartern, index) => (
            <img
              alt={MyPartern}
              className="min-w-[200px]"
              height="100"
              src={MyPartern}
              style={{
                aspectRatio: "200/100",
                objectFit: "contain",
              }}
              width="200"
            />
            ))
        }
           
          </div>
        </div>
      </section>
    )
  }