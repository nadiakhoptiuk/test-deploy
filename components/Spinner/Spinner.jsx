import Logo from 'public/logo.svg';

const Spinner = () => {
  return (
    <div className="lds-ellipsis-container">
      <Logo className="h-[100px] w-[150px]" />
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Spinner;
