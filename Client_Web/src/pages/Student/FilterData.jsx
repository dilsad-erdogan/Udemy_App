import { PiEmptyBold } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import VideoCart from '../../components/Video/Student/VideoCart'
import StudentPageNavbar from '../../components/Navbar/StudentPageNavbar';
import { useEffect } from 'react';
import { fetchVideos } from '../../redux/videoSlice';

const FilterData = () => {
    const filterVideos = useSelector(state => state.video.filteredData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideos());
    }, []);

    return (
        <main className="overflow-x-hidden bg-white text-dark">
            <StudentPageNavbar />
            
            <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
                {filterVideos.length > 0 ? (
                    <>
                        <h2 className="text-2xl font-bold mb-6 text-center">Videos</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
                            {filterVideos?.map((video) => (
                                <div key={video._id}>
                                    <VideoCart data={video}/>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col justify-center items-center text-center gap-3 mb-4">
                            <PiEmptyBold className="h-96 w-96 text-red-500" />
                            <h4 className="text-xl font-semibold text-red-500">No product found</h4>
                        </div>
                    </>
                )}
            </div>
        </main>
    )
}

export default FilterData