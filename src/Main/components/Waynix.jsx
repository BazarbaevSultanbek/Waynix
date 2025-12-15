import { Button, Select } from "@mantine/core";

const Waynix = () => {
  return (
    <>
      <div className="Waynix">
        <div className="container">
          <div className="Waynix-main">
            <div className="Waynix-main-center">
              <h1>Waynix</h1>
              <p>One easy way...</p>
            </div>

            <nav className="Waynix-main-action">
              <section className="Waynix-main-action-categories">
                <Select
                  label="Kategoriya"
                  placeholder="Kategoriya tanlang"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />
              </section>

              <section className="Waynix-main-action-location">
                <p>Joy</p>
                <input
                  type="text"
                  id="location_search"
                  placeholder="Qidiruv joyi"
                />

                <label htmlFor="location_search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokewWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin absolute left-3 top-4 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </label>
              </section>

              <section className="Waynix-main-action-rates">
                <Select
                  label="Reyting"
                  placeholder="Reyting"
                  data={["React", "Angular", "Vue", "Svelte"]}
                />
              </section>

              <Button variant="filled" color="#f54a00" size="md" radius="md">
                Izlash
              </Button>
            </nav>

            <div className="Waynix-main-text">
              <p>Qoraqalpog'istonda sayohat <br/>qilishning eng oson yo'li</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Waynix;
