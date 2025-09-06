import Image from 'next/image';

const SkillSection = ({ title, subtitle, description, skills, thumbnail }) => {
  return (
    <div className='flex flex-col justify-center max-w-sm md:h-dvh julius gap-4 not-md:mx-auto -mt-full'>
      {/* image  */}
      <div className='w-full mx-auto aspect-[16/9] bg-gray-400 rounded-lg shadow-2xl shadow-[#aae4f6] mb-5 md:hidden translate-x-animation relative overflow-hidden'>
        <Image
          src={thumbnail}
          alt="image"
          fill
          className="object-cover"
        />
      </div>

      {/* heading */}
      <div className='flex flex-col fade-in'>
        <h1 className='font-bold lg:text-5xl text-4xl'
          style={{ WebkitTextStroke: "3px black" }}>{title}</h1>
        {subtitle && (
          <h1 className="font-bold lg:text-3xl text-2xl"
            style={{ WebkitTextStroke: "1px black" }}>{subtitle}</h1>
        )}
      </div>

      <main className='flex flex-col gap-2 fade-in'>
        <p className=''>{description}</p>
        <ul style={{ listStyleImage: "url(/list-icon.png)" }} className='list-inside **:px-4'>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default SkillSection