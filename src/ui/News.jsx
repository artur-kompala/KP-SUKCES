import { useState, useEffect } from 'react';
import { deletePost, getAllPost } from "../services/apiGallery"
import Viewer from 'react-viewer';
import ProtectedAdmin from './ProtectedAdmin';
import { TrashIcon } from '@heroicons/react/20/solid';



export default function News() {
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);
  const [reload,setReload] = useState(false)

    useEffect(function(){
      getAllPost().then((data)=>setPosts(data));
    },[reload])

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Aktualności
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dowiedz się więcej i bądź na bierząco.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2x1 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
            <article
              key={post.id}
              className="flex flex-row items-center bg-white shadow dark:bg-gray-100 m-4 rounded-lg p-6"
            >
              <div>
                <img
                  src={post.imgSrc}
                  onClick={() => {
                    setVisible(true);
                    setCurrentImg(post.imgSrc);
                  }}
                ></img>
                <Viewer
                  visible={visible}
                  onClose={() => {
                    setVisible(false);
                  }}
                  images={[{ src: currentImg, alt: "opis" }]}
                />
              </div>
              <div className="flex-cols-2 p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.cat}
                  </p>
                  <ProtectedAdmin>
                  <TrashIcon className="size-6 text-gray-700 hover:text-gray-400" onClick={()=>deletePost(post.id).then(()=>setReload((prevState) => !prevState))}
                    ></TrashIcon>
                </ProtectedAdmin>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.cat}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {post.desc}
                  </p>
                </div>
                
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
