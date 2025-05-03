import { useSelector, useDispatch } from "react-redux";
import QRCode from "react-qr-code";
import { deleteFile } from "../redux/slice/fileSlice";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaDownload,
  FaCopy,
  FaEllipsisV,
  FaTrash,
} from "react-icons/fa";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Header from "./HeaderComp";
import Footer from "./Footer";
import { motion } from "framer-motion";

const FilePreview = () => {
  const { files } = useSelector((state) => state.file);
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);
  const qrCodeRef = useRef({});

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  };

  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertSVGToCanvas = (svgElement) => {
    return new Promise((resolve, reject) => {
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        resolve(canvas);
      };

      img.onerror = reject;
      img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
    });
  };

  const handleDownloadQR = async (path) => {
    const qrSvg = qrCodeRef.current[path].querySelector("svg");
    if (qrSvg) {
      try {
        const canvas = await convertSVGToCanvas(qrSvg);
        const qrImageUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = qrImageUrl;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error converting SVG to Canvas:", error);
      }
    } else {
      console.error("QR SVG not found");
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      dispatch(deleteFile(index));
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50">
      <Header />
      <div className="container mx-auto p-4 sm:p-8 lg:p-12 mt-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 drop-shadow-lg">Uploaded Files</h2>
        {files.length === 0 ? (
          <p className="text-center text-gray-500">No files uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {files.map((file, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border-t-4 border-blue-400 hover:shadow-3xl transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7, type: 'spring' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-blue-700 truncate" title={file.data.name}>{file.data.name}</span>
                  <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">{file.data.type.split('/')[1]?.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-4">
                  {file.data.type.startsWith("image") && (
                    <img
                      src={file.path}
                      alt={file.data.name}
                      className="h-20 w-20 object-cover rounded-xl border"
                    />
                  )}
                  {file.data.type.startsWith("video") && (
                    <video
                      src={file.path}
                      className="h-20 w-20 object-cover rounded-xl border"
                      controls
                    />
                  )}
                  <div className="flex-1">
                    <div className="text-gray-600 text-sm mb-1">{(file.data.size / (1024 * 1024)).toFixed(2)} MB</div>
                    <div className="text-gray-400 text-xs">Uploaded: {new Date(file.data.createdAt).toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button
                    onClick={() => handleDownload(file.path, file.data.name)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1 px-4 rounded-full font-semibold shadow hover:scale-105 hover:shadow-lg transition-transform duration-200 flex items-center gap-2"
                  >
                    <FaDownload /> Download
                  </button>
                  <button
                    onClick={() => handleCopyUrl(file.path)}
                    className="bg-white border border-blue-400 text-blue-600 py-1 px-4 rounded-full font-semibold shadow hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaCopy /> Copy Link
                  </button>
                  <button
                    onClick={() => handleDownloadQR(file.path)}
                    className="bg-white border border-purple-400 text-purple-600 py-1 px-4 rounded-full font-semibold shadow hover:bg-purple-50 transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaDownload /> QR
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-white border border-red-400 text-red-600 py-1 px-4 rounded-full font-semibold shadow hover:bg-red-50 transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
                <div className="flex gap-3 mt-2 justify-end">
                  <FacebookShareButton url={file.path} title="Share on Facebook">
                    <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors duration-200" size={22} />
                  </FacebookShareButton>
                  <TwitterShareButton url={file.path} title="Share on Twitter">
                    <FaTwitter className="text-blue-400 hover:text-blue-600 transition-colors duration-200" size={22} />
                  </TwitterShareButton>
                  <WhatsappShareButton url={file.path} title="Share on WhatsApp">
                    <FaWhatsapp className="text-green-500 hover:text-green-700 transition-colors duration-200" size={22} />
                  </WhatsappShareButton>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FilePreview;