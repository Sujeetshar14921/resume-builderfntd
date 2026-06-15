import React, { useEffect, useState } from "react";
import {
  FilePenLineIcon,
  Trash2,
  Download
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";

const MyResumes = () => {

  const [allResumes, setAllResumes] = useState([]);
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const loadResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: { Authorization: token }
      });

      setAllResumes(data.resumes);

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  // 🗑️ DELETE RESUME
  const deleteResume = async (id) => {
    try {
      await api.delete(`/api/resume/${id}`, {
        headers: { Authorization: token }
      });

      setAllResumes((prev) => prev.filter((r) => r._id !== id));
      toast.success("Resume deleted successfully");

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  // ⬇️ DOWNLOAD RESUME
  const downloadResume = async (id) => {
    try {
      const response = await api.get(`/api/resume/download/${id}`, {
        headers: { Authorization: token },
        responseType: "blob"
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.success("Downloading...");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate("/app")}
        className="mb-8 text-indigo-600 hover:text-indigo-800"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">
        My Resumes
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {allResumes.map((resume) => (
          <div
            key={resume._id}
            onClick={() => navigate(`/app/builder/${resume._id}`)}
            className="group bg-white border rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all relative"
          >
            <FilePenLineIcon className="size-10 text-indigo-600 mb-4" />

            <h2 className="font-semibold">
              {resume.title}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Updated:{" "}
              {new Date(resume.updatedAt).toLocaleDateString()}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 mt-5 opacity-0 group-hover:opacity-100 transition">

              {/* Download */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadResume(resume._id);
                }}
                className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              >
                <Download size={16} />
                Download
              </button>

              {/* Delete */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteResume(resume._id);
                }}
                className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
              >
                <Trash2 size={16} />
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default MyResumes;