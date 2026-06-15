import React, { useEffect, useState } from "react";
import { FilePenLineIcon, Trash2, Download } from "lucide-react";
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
        headers: { Authorization: token },
      });

      setAllResumes(data.resumes);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  const deleteResume = async (id) => {
    try {
      await api.delete(`/api/resume/${id}`, {
        headers: { Authorization: token },
      });

      setAllResumes((prev) => prev.filter((r) => r._id !== id));
      toast.success("Resume deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const downloadResume = async (id) => {
    try {
      const response = await api.get(`/api/resume/download/${id}`, {
        headers: { Authorization: token },
        responseType: "blob",
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="mb-10">
          <button
            onClick={() => navigate("/app")}
            className="text-indigo-600 hover:text-indigo-800 mb-6"
          >
            ← Back
          </button>

          <h1 className="text-4xl font-bold text-slate-900">
            My Resumes
          </h1>

          <p className="text-slate-500 mt-2">
            Manage, download and edit your resumes
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {allResumes.map((resume) => (
            <div
              key={resume._id}
              onClick={() => navigate(`/app/builder/${resume._id}`)}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all"
            >

              {/* ICON */}
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4">
                <FilePenLineIcon className="text-indigo-600" />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-lg text-slate-900">
                {resume.title}
              </h2>

              {/* DATE */}
              <p className="text-sm text-slate-500 mt-2">
                Updated: {new Date(resume.updatedAt).toLocaleDateString()}
              </p>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-6">

                {/* DOWNLOAD */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadResume(resume._id);
                  }}
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                >
                  <Download size={16} />
                  Download
                </button>

                {/* DELETE */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteResume(resume._id);
                  }}
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MyResumes;