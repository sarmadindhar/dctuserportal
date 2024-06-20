import DefaultLayout from '../../layout/DefaultLayout.tsx';

const Invoice = ()=>{
  return(
    <DefaultLayout title={'Invoice'}>
      <div className="grid grid-cols-1">
        <div className="bg-white p-10 rounded">
          <p className="font-medium text-orange mt-3"> Invoice</p>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Invoice;