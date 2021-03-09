const Progress = ({ value, color, text }) => {
  return (
    <div className='relative pt-1'>
      <div className='flex mb-2 items-center justify-center'>
        <div>
          <span className='md:w-52 text-center text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white-600' style={{ backgroundColor: `${color}` }}>
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
