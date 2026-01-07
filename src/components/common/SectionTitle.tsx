

const SectionTitle = ({title} : {title: string}) => {
  return (
    <div className='flex items-center justify-center py-5 min-h-[30px]'>
      <h2 className='text-5xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white'>{title}</h2>
    </div>
  );
}

export default SectionTitle;