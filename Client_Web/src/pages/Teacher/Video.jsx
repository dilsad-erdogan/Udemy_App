import { useState } from "react"
import TeacherPageNavbar from "../../components/Navbar/TeacherPageNavbar"

const Video = () => {
  const [title, setTitle] = useState('');
  const [png, setPng] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = () => {};

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <TeacherPageNavbar />

      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="col-span-1 flex flex-col p-4 space-y-4">
            <div>
              <label className="block text-xl font-semibold mb-2">Title</label>
              <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="w-full text-xl p-2 border rounded-md" placeholder="Enter title" />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-2">Video Png</label>
              <input type="text" value={png} onChange={(e) => {setPng(e.target.value)}} className="w-full text-xl p-2 border rounded-md" placeholder="Enter video png url" />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-2">Video Url</label>
              <input type="text" value={url} onChange={(e) => {setUrl(e.target.value)}} className="w-full text-xl p-2 border rounded-md" placeholder="Enter video url" />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-2">Price</label>
              <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} className="w-full text-xl p-2 border rounded-md" placeholder="Enter price" />
            </div>
          </div>

          <div className="col-span-1 flex flex-col border-l p-4 space-y-4">
            <div>
              <label className="block text-xl font-semibold mb-2">Description</label>
              <textarea rows={8} value={desc} onChange={(e) => {setDesc(e.target.value)}} className="w-full text-xl p-2 border rounded-md resize-none" placeholder="Enter description" />
            </div>

            <button type="submit" className="primary-btn">Send Video</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Video