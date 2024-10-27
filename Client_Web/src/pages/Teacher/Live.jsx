import { useRef, useState, useEffect } from "react";
import TeacherPageNavbar from "../../components/Navbar/TeacherPageNavbar";

const Live = () => {
  const videoRef = useRef(null);
  const [screenStream, setScreenStream] = useState(null);

  const [title, setTitle] = useState('');
  const [png, setPng] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const startScreenShare = async () => {
    if(title === '' && png === '' && price === '' && desc === ''){
      alert('Please, enter in the inputs.');
    } else {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });
        setScreenStream(stream);
      } catch (error) {
        console.error("Error sharing screen: ", error);
      }      
    }
  };

  const stopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
      setScreenStream(null);
    }
  };

  useEffect(() => {
    if (videoRef.current && screenStream) {
      videoRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <TeacherPageNavbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div className="col-span-2 flex justify-center items-center bg-gray-200 p-4">
          {screenStream ? (
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xl">No screen shared</span>
            </div>
          )}
        </div>

        <div className="flex flex-col p-5 gap-4">
          <div>
            <label className="block text-xl font-semibold mb-2">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full text-xl p-2 border rounded-md" placeholder="Enter title" />
          </div>

          <div>
            <label className="block text-xl font-semibold mb-2">Video Png</label>
            <input type="text" value={png} onChange={(e) => setPng(e.target.value)} className="w-full text-xl p-2 border rounded-md" placeholder="Enter video png url" />
          </div>

          <div>
            <label className="block text-xl font-semibold mb-2">Price</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full text-xl p-2 border rounded-md" placeholder="Enter price" />
          </div>

          <div>
            <label className="block text-xl font-semibold mb-2">Description</label>
            <textarea rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full text-xl p-2 border rounded-md resize-none" placeholder="Enter description" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            <button className="primary-btn" onClick={startScreenShare}>Start Screen Share</button>
            <button className="primary-btn" onClick={stopScreenShare} disabled={!screenStream}>Stop Screen Share</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Live;