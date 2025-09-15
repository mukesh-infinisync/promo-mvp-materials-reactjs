import Header from "./Header";

type PropsType = {
  children: React.ReactNode;
};

const AppLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-[70px]"> {/* Push down content by header height */}
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
