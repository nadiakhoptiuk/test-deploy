import Header from 'layout/Header/Header';
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() =>
  import(/* webpackChunkName: "Footer" */ '../Footer/Footer'),
);

const Layout = ({ data, children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <DynamicFooter data={data} />
    </div>
  );
};
export default Layout;
