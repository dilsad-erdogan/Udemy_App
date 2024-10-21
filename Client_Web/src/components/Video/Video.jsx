import VideoCart from "./VideoCart"

const Video = ({ HeroData }) => {
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Videos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
            {HeroData.map(((data) => (
                <div key={data._id}>
                    <VideoCart data={data} />
                </div>
            )))}
        </div>
    </div>
  )
}

export default Video