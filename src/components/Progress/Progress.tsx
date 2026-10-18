import { progress } from './data'

const Progress = () => {
  return (
    <section className="bg-deep-pink text-white">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-24">
        <div className="flex w-full items-center lg:w-1/2">
          <video
            className="h-80 w-full object-cover lg:h-[651px]"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={progress.video.videosrc} type="video/mp4" />
            {progress.video.noSupport}
          </video>
        </div>
        <div className="flex w-full items-center lg:w-1/2">
          <div className="mx-6 my-10 lg:mx-16 lg:my-0">
            <h2 className="font-gilroy mb-4 max-w-[541px] text-[32px] leading-10 font-bold lg:text-[50px] lg:leading-[58px]">
              {progress.title}
            </h2>
            <p className="font-plex text-base leading-[30px] font-normal">
              {progress.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progress
