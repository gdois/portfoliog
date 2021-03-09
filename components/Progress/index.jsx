const Progress = ({ value, color, text }) => {
  return (
    <div className='relative pt-1'>
      <div className='flex mb-2 items-center justify-between'>
        <div>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white-600' style={{ backgroundColor: `${color}` }}>
            {text}
          </span>
        </div>
        <div className='text-right'>
          <span className='text-xs font-semibold inline-block text-pink-600'>
            {value}%
          </span>
        </div>
      </div>
      <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200'>
        <div
          style={{ width: `${value}%`, backgroundColor: `${color}` }}
          class='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center'
        ></div>
      </div>
    </div>
  );
};

export default Progress;
