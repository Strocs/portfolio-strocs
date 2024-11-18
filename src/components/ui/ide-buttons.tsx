import { X } from 'lucide-react'

interface Props {
  zoomedImage: string | null
  setZoomedImage: (image: string | null) => void
}

export const IdeButtons = ({ zoomedImage, setZoomedImage }: Props) => {
  return { zoomedImage && (

    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-w-4xl max-h-full">
        <img
          src={`/placeholder.svg?height=600&width=800`}
          alt="Zoomed project image"
          className="max-w-full max-h-[90vh] object-contain"
        />
        <button
          onClick={() => setZoomedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  )
}

