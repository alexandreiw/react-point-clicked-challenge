export const Button = ({ children }) => (
  <>
    <button className="m-2 rounded-lg border border-primary px-9 py-3 uppercase text-primary shadow-lg transition-all duration-500 hover:border-white hover:bg-primary hover:text-white hover:shadow-sm active:bg-primaryAlt">
      {children}
    </button>
  </>
);
